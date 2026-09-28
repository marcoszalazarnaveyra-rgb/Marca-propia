// These values are supplied privately at build time, never committed to GitHub.
const fields = {
  name: import.meta.env.LEGAL_OWNER_NAME?.trim(),
  nif: import.meta.env.LEGAL_OWNER_NIF?.trim(),
  address: import.meta.env.LEGAL_OWNER_ADDRESS?.trim(),
};

if (Object.values(fields).some(value => !value)) {
  throw new Error('Faltan los datos del titular: configura LEGAL_OWNER_NAME, LEGAL_OWNER_NIF y LEGAL_OWNER_ADDRESS antes de compilar.');
}

export const legal = {
  name: fields.name!,
  nif: fields.nif!,
  address: fields.address!,
  email: 'info@marcoszalazar.es',
  updated: '28 de septiembre de 2026',
};
