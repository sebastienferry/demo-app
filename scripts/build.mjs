// Builds dist/index.html with the build settings read from forgekit.config.json.

import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { renderPage } from '../src/render.js';

const config = JSON.parse(await readFile(new URL('../forgekit.config.json', import.meta.url), 'utf8'));

await mkdir(new URL('../dist/', import.meta.url), { recursive: true });
await writeFile(new URL('../dist/index.html', import.meta.url), renderPage());

console.log(`Built dist/index.html (forgekit ${config.forgekit}, target ${config.target})`);
