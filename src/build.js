// Builds index.html from src/app.html (inlines the logo paths).
const fs = require('fs');
const paths = fs.readFileSync(__dirname + '/../logo.svg', 'utf8').match(/<path[^>]*\/>/g).map(p => p.replace(/ class="cls-1"/, '')).join('');
const html = fs.readFileSync(__dirname + '/app.html', 'utf8').replace('%%LOGO%%', paths);
fs.writeFileSync(__dirname + '/../index.html', html);
console.log('index.html', html.length, 'bytes');
