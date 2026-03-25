const fs = require('fs');
const path = require('path');

const srcDir = 'd:/Depa_Website/College-Department-Website/Administration';
const destDir = 'd:/Depa_Website/College-Department-Website/public/Administration';

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
files.forEach(file => {
    if (file.endsWith('.jpeg')) {
        console.log(`Copying ${file}...`);
        fs.copyFileSync(path.join(srcDir, file), path.join(destDir, file));
    }
});
console.log('Done.');
