import { cp, mkdir, rm } from 'node:fs/promises';

const files = ['index.html', 'manifest.json', 'icon.png'];
await rm('www', { recursive: true, force: true });
await mkdir('www', { recursive: true });
await Promise.all(files.map((file) => cp(file, `www/${file}`)));
console.log('Android web assets prepared in www/.');
