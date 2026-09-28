import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { runInNewContext } from 'node:vm';
import ts from 'typescript';

const source = readFileSync('src/scripts/privacy.ts', 'utf8');
const compiled = ts.transpileModule(source, {
  compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.CommonJS },
}).outputText;
const now = Date.now();
const key = 'mz_privacy_notice';
const lifetime = 180 * 24 * 60 * 60 * 1000;

function environment(initialValue = null, blocked = false) {
  const callbacks = new Map();
  const writes = [];
  let stored = initialValue;
  function element(extra = {}) {
    return {
      hidden: true, isConnected: true, focused: false,
      addEventListener(type, callback) { callbacks.set(this, { ...callbacks.get(this), [type]: callback }); },
      click() { callbacks.get(this)?.click?.(); },
      closest() { return null; },
      focus() { this.focused = true; },
      ...extra,
    };
  }
  const notice = element();
  const message = element({ textContent: '' });
  const dialog = element({
    open: false,
    dataset: { preferenceKey: key, preferenceVersion: '1', preferenceDays: '180' },
    showModal() { this.open = true; },
    close() { this.open = false; callbacks.get(this)?.close?.(); },
  });
  const open = element();
  const remember = element();
  const forget = element();
  const close = element();
  const nodes = {
    '[data-privacy-notice]': notice, '[data-privacy-dialog]': dialog,
    '[data-privacy-status]': message, '[data-privacy-open]': open,
    '[data-privacy-remember]': remember, '[data-privacy-forget]': forget,
    '[data-privacy-close]': close,
  };
  const windowCallbacks = {};
  runInNewContext(compiled, {
    exports: {}, Date,
    document: { querySelector: selector => nodes[selector], querySelectorAll: selector => [nodes[selector]] },
    window: { addEventListener: (type, callback) => { windowCallbacks[type] = callback; } },
    localStorage: {
      getItem(name) { assert.equal(name, key); if (blocked) throw new Error('Storage blocked'); return stored; },
      setItem(name, value) { assert.equal(name, key); if (blocked) throw new Error('Storage blocked'); writes.push('save'); stored = value; },
      removeItem(name) { assert.equal(name, key); if (blocked) throw new Error('Storage blocked'); writes.push('remove'); stored = null; },
    },
  });
  return { notice, dialog, message, open, remember, forget, close, writes, stored: () => stored, windowCallbacks };
}

// Visiting, opening configuration and closing it must not create storage.
const first = environment();
assert.equal(first.notice.hidden, false);
first.open.click();
assert.equal(first.dialog.open, true);
first.close.click();
assert.equal(first.dialog.open, false);
assert.equal(first.open.focused, true);
assert.deepEqual(first.writes, []);
assert.equal(first.notice.hidden, false);

// Remembering is explicit; a later page recognizes the valid preference.
first.remember.click();
assert.deepEqual(first.writes, ['save']);
assert.equal(first.notice.hidden, true);
assert.equal(environment(first.stored()).notice.hidden, true);
assert.deepEqual(environment(first.stored()).writes, []);

// Continue without saving removes the site preference and never creates a new one.
const forget = environment(first.stored());
forget.open.click();
forget.forget.click();
assert.deepEqual(forget.writes, ['remove']);
assert.equal(forget.stored(), null);
assert.equal(forget.notice.hidden, true);
assert.equal(environment(forget.stored()).notice.hidden, false);

// Expired, invalid, future or changed-version values are not treated as permission.
for (const item of [
  '{invalid',
  JSON.stringify({ version: 1, acknowledged: true, savedAt: now - lifetime - 1000 }),
  JSON.stringify({ version: 1, acknowledged: true, savedAt: now + lifetime }),
  JSON.stringify({ version: 2, acknowledged: true, savedAt: now }),
  JSON.stringify({ version: 1, acknowledged: false, savedAt: now }),
]) {
  const invalid = environment(item);
  assert.equal(invalid.notice.hidden, false);
  assert.deepEqual(invalid.writes, []);
}

// A browser refusing storage must still allow the user to dismiss the notice.
const blocked = environment(null, true);
blocked.remember.click();
assert.equal(blocked.dialog.open, true);
assert.ok(blocked.message.textContent.includes('no permite guardar'));
blocked.forget.click();
assert.equal(blocked.dialog.open, false);
assert.equal(blocked.notice.hidden, true);

// Production HTML must keep third-party active resources absent and CSP enabled.
function htmlFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(path) : entry.name.endsWith('.html') ? [path] : [];
  });
}
const pages = htmlFiles('dist');
assert.equal(pages.length, 4);
for (const path of pages) {
  const html = readFileSync(path, 'utf8');
  assert.ok(/http-equiv="Content-Security-Policy"/.test(html), 'Missing resource policy');
  assert.ok(/script-src 'self'/.test(html), 'Scripts must be restricted to this site');
  assert.ok(/connect-src 'self'/.test(html), 'Connections must be restricted to this site');
  assert.ok(!/<(?:iframe|embed|object)\b/i.test(html), 'Unexpected embedded content');
  assert.ok(!/<(?:script|img|source)\b[^>]*\bsrc=["'](?:https?:)?\/\//i.test(html), 'Unexpected third-party resource');
  assert.ok(!/<link\b(?=[^>]*rel=["'](?:stylesheet|preconnect|dns-prefetch)["'])[^>]*href=["'](?:https?:)?\/\//i.test(html), 'Unexpected third-party stylesheet or preconnection');
  for (const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)) {
    assert.ok(/\bsrc=/.test(match[1]) || /type="application\/ld\+json"/.test(match[1]), 'Unexpected inline executable script');
  }
  assert.ok(/href="\/aviso-legal\/"/.test(html), 'Missing legal notice link');
  assert.ok(/href="\/politica-de-privacidad\/"/.test(html), 'Missing privacy policy link');
  assert.ok(/href="\/politica-de-cookies\/"/.test(html), 'Missing cookie policy link');
}
console.log('Privacy checks passed: no initial storage writes, explicit preference, expiry, reset, blocked storage, and all 4 pages without third-party active resources.');

