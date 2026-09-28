// No optional tracking or embeds are used. Keep external resources blocked.
// Adding a service requires updating this policy, the inventory and consent UI.
export const resourcePolicy = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self'",
  "frame-src 'none'",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
].join('; ');

export const privacyPreference = {
  key: 'mz_privacy_notice',
  version: 1,
  days: 180,
};
