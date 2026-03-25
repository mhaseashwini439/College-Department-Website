const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'Administration');

const renames = [
  ['Dr. A.A. Takate.jpeg',      'takate_aa.jpg'],
  ['Prof. A.D. Gangarde.jpeg',  'gangarde_ad.jpg'],
  ['Prof. K.S. Choure.jpeg',    'choure_ks.jpg'],
  ['Prof. M.A. Karkhile.jpeg',  'karkhile_ma.jpg'],
  ['Prof. M.B. Bhingare.jpeg',  'bhingare_mb.jpg'],
  ['Prof. M.B. Gobare.jpeg',    'gobare_mb.jpg'],
  ['Prof. M.J. Jasud.jpeg',     'jasud_mj.jpg'],
  ['Prof. M.R. Choudhary.jpeg', 'choudhary_mr.jpg'],
  ['Prof. S.B. Khalekar.jpeg',  'khalekar_sb.jpg'],
  ['Prof. S.S. Kale.jpeg',      'kale_ss.jpg'],
];

renames.forEach(([oldName, newName]) => {
  const oldPath = path.join(dir, oldName);
  const newPath = path.join(dir, newName);
  if (fs.existsSync(oldPath)) {
    fs.copyFileSync(oldPath, newPath);
    console.log(`✅  ${oldName}  →  ${newName}`);
  } else {
    console.warn(`⚠️  Not found: ${oldName}`);
  }
});
console.log('\nDone! Now run: git add public/Administration && git commit -m "fix: rename faculty photos for Vercel" && git push');
