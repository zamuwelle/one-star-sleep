const fs = require('node:fs');
const path = require('node:path');

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), 'Sleep: 1 star. Reliable in theory, but every use requires me to abandon an active session and lose unsaved progress.');
