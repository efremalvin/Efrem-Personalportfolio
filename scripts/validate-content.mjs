// Validasi konten src/data/portfolioData.ts sebelum build.
import { readFileSync } from 'node:fs';
const src = readFileSync(new URL('../src/data/portfolioData.ts', import.meta.url), 'utf8');
const get = (k) => (src.match(new RegExp(`${k}:\\s*['"\`]([^'"\`]*)['"\`]`)) || [])[1];
const errors = [];
for (const k of ['name', 'headline', 'location', 'email', 'whatsappNumber', 'githubUrl', 'avatarUrl'])
  if (!get(k)) errors.push(`PROFILE_DATA.${k} kosong`);
if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(get('email') || '')) errors.push('email tidak valid');
if (!/^62\d{8,13}$/.test(get('whatsappNumber') || '')) errors.push('whatsappNumber harus format 62xxxxxxxxxx');
if (/6281234567890/.test(src)) errors.push('masih ada nomor WhatsApp placeholder');
for (const u of src.match(/https?:\/\/[^\s'"`]+/g) || []) { try { new URL(u); } catch { errors.push(`URL tidak valid: ${u}`); } }
if (errors.length) { console.error('✖ Validasi konten gagal:\n - ' + errors.join('\n - ')); process.exit(1); }
console.log('✔ Konten valid');
