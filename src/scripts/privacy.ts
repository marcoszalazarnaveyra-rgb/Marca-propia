const notice = document.querySelector<HTMLElement>('[data-privacy-notice]');
const dialog = document.querySelector<HTMLDialogElement>('[data-privacy-dialog]');
const privacyStatus = document.querySelector<HTMLElement>('[data-privacy-status]');

if (notice && dialog) {
  const key = dialog.dataset.preferenceKey!;
  const version = Number(dialog.dataset.preferenceVersion);
  const lifetime = Number(dialog.dataset.preferenceDays) * 24 * 60 * 60 * 1000;
  let returnFocus: HTMLElement | null = null;

  // Read-only until the visitor explicitly chooses to remember or forget.
  function remembered() {
    try {
      const item = JSON.parse(localStorage.getItem(key) ?? 'null');
      const now = Date.now();
      return item?.version === version && item?.acknowledged === true &&
        Number.isFinite(item.savedAt) && item.savedAt <= now && now - item.savedAt < lifetime;
    } catch {
      return false;
    }
  }

  function finish() {
    notice!.hidden = true;
    if (dialog!.open) dialog!.close();
  }

  notice.hidden = remembered();
  document.querySelectorAll<HTMLButtonElement>('[data-privacy-open]').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', () => {
      returnFocus = button;
      if (privacyStatus) privacyStatus.textContent = '';
      if (!dialog.open) dialog.showModal();
    });
  });

  document.querySelectorAll<HTMLButtonElement>('[data-privacy-remember]').forEach(button => {
    button.addEventListener('click', () => {
      try {
        localStorage.setItem(key, JSON.stringify({ version, acknowledged: true, savedAt: Date.now() }));
        finish();
      } catch {
        notice.hidden = true;
        if (!dialog.open) dialog.showModal();
        if (privacyStatus) privacyStatus.textContent = 'Este navegador no permite guardar la preferencia. Puedes continuar sin guardar y seguir utilizando la web.';
      }
    });
  });

  document.querySelector('[data-privacy-forget]')?.addEventListener('click', () => {
    try { localStorage.removeItem(key); } catch { /* Storage may be unavailable. */ }
    finish();
  });
  document.querySelector('[data-privacy-close]')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('close', () => {
    if (returnFocus?.isConnected && !returnFocus.closest('[hidden]')) returnFocus.focus();
  });
  window.addEventListener('storage', event => {
    if (event.key === key || event.key === null) notice.hidden = remembered();
  });
}

export {};
