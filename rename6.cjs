const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'public', 'administration');

const renames = [
  ['Prof. K.S. Choure.jpeg',    'choure_ks.jpeg'],
  ['Prof. M.A. Karkhile.jpeg',  'karkhile_ma.jpeg'],
  ['Prof. M.J. Jasud.jpeg',     'jasud_mj.jpeg'],
  ['Prof. M.R. Choudhary.jpeg', 'choudhary_mr.jpeg'],
  ['Prof. S.B. Khalekar.jpeg',  'khalekar_sb.jpeg'],
  ['Prof. S.S. Kale.jpeg',      'kale_ss.jpeg'],
];

renames.forEach(([from, to]) => {
  const src = path.join(dir, from);
  const dst = path.join(dir, to);
  if (!fs.existsSync(src)) { console.log('NOT FOUND: ' + from); return; }
  if (fs.existsSync(dst))  { console.log('SKIP (exists): ' + to); return; }
  try {
    const data = fs.readFileSync(src);
    fs.writeFileSync(dst, data);
    fs.unlinkSync(src);
    console.log('OK: ' + from + ' → ' + to);
  } catch(e) { console.error('ERROR: ' + from + ': ' + e.message); }
});

console.log('\nFiles now in directory:');
fs.readdirSync(dir).filter(f => /\.(jpeg|jpg|png|webp)$/i.test(f)).forEach(f => console.log('  ' + f));
