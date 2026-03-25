const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'administration');

// Titles to strip out
const stripTitles = /\b(prof|dr|sir|hod|mr|mrs|ms)\b\.?\s*/gi;

function toSafeName(filename) {
  const ext = path.extname(filename).toLowerCase();          // e.g. .jpeg
  const base = path.basename(filename, path.extname(filename)); // e.g. "Prof. M.B. Gobare"

  // Remove titles
  let cleaned = base.replace(stripTitles, '').trim();
  // e.g. "M.B. Gobare" or "A.D. Gangarde"

  // Split into parts by spaces
  const parts = cleaned.split(/\s+/).filter(Boolean);
  // e.g. ["M.B.", "Gobare"]  or  ["Gobare"]

  if (parts.length === 0) return null;

  // Last part = last name, rest = initials/first name
  const lastName = parts[parts.length - 1]
    .replace(/\./g, '')   // remove dots
    .toLowerCase();

  const initials = parts.slice(0, -1)
    .map(p => p.replace(/\./g, '').toLowerCase())
    .join('_');

  const safeName = initials
    ? `${lastName}_${initials}${ext}`
    : `${lastName}${ext}`;

  return safeName;
}

// Scan directory
let files;
try {
  files = fs.readdirSync(dir);
} catch (e) {
  console.error('❌ Could not read directory:', dir);
  console.error(e.message);
  process.exit(1);
}

console.log(`\n📁 Scanning: ${dir}\n`);
console.log('─'.repeat(60));

const imageExts = ['.jpeg', '.jpg', '.png', '.webp', '.gif'];
let renamed = 0, skipped = 0, errors = 0;

files.forEach(file => {
  const ext = path.extname(file).toLowerCase();
  if (!imageExts.includes(ext)) return; // skip non-images

  const newName = toSafeName(file);
  if (!newName) {
    console.log(`⚠️  SKIP  (could not parse): ${file}`);
    skipped++;
    return;
  }

  if (newName === file) {
    console.log(`✅ OK    (already safe):    ${file}`);
    skipped++;
    return;
  }

  const oldPath = path.join(dir, file);
  const newPath = path.join(dir, newName);

  if (fs.existsSync(newPath)) {
    console.log(`⚠️  SKIP  (target exists):  ${file} → ${newName}`);
    skipped++;
    return;
  }

  try {
    fs.renameSync(oldPath, newPath);
    console.log(`✏️  RENAMED: ${file}`);
    console.log(`         → ${newName}`);
    renamed++;
  } catch (e) {
    console.log(`❌ ERROR:  ${file} → ${e.message}`);
    errors++;
  }
});

console.log('─'.repeat(60));
console.log(`\n✅ Renamed: ${renamed}  |  ⚠️ Skipped: ${skipped}  |  ❌ Errors: ${errors}`);

if (renamed > 0) {
  console.log('\n📋 Final file list:');
  fs.readdirSync(dir)
    .filter(f => imageExts.includes(path.extname(f).toLowerCase()))
    .forEach(f => console.log('   ' + f));
  console.log('\n🚀 Now run:');
  console.log('   git add -A && git commit -m "fix: safe image filenames" && git push\n');
}
