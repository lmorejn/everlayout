// Copia la app web (../web) a ./app y la deja lista para funcionar sin conexión:
// quita Google Fonts y usa las fuentes que van incluidas (fonts/screen/*.woff2).
const fs = require('fs'), path = require('path');
const SRC = path.join(__dirname, '..', 'web'), DST = path.join(__dirname, 'app');
fs.rmSync(DST, { recursive: true, force: true });
fs.cpSync(SRC, DST, { recursive: true });
const FACES = [
  ['Archivo', 'archivo', '62% 125%'], ['Lora', 'lora'], ['EB Garamond', 'eb-garamond'],
  ['Libre Baskerville', 'libre-baskerville'], ['Figtree', 'figtree', null, true]
];
let css = '';
for (const [fam, file, stretch, onlyNormal] of FACES) {
  for (const st of onlyNormal ? ['normal'] : ['normal', 'italic']) {
    css += `@font-face{font-family:'${fam}';src:url(fonts/screen/${file}-${st}.woff2) format('woff2');font-weight:100 900;font-style:${st};${stretch ? `font-stretch:${stretch};` : ''}font-display:block}\n`;
  }
}
const f = path.join(DST, 'index.html');
let html = fs.readFileSync(f, 'utf8');
const before = html.length;
html = html.replace(/<link rel="preconnect"[^>]*>\s*/g, '').replace(/<link href="https:\/\/fonts\.googleapis\.com[^>]*>\s*/g, '');
if (html.length === before) console.warn('Aviso: no se encontró el enlace a Google Fonts');
html = html.replace('<style>\n', '<style>\n/* fuentes incluidas en la app de escritorio */\n' + css);
fs.writeFileSync(f, html);
console.log('App web preparada en', DST);
