const fs = require('fs');
const path = require('path');

const srcDir = 'd:/Depa_Website/College-Department-Website/Administration';
const destDir = 'd:/Depa_Website/College-Department-Website/public/Administration';

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir);
files.forEach(file => {
    if (file.toLowerCase().endsWith('.jpeg') || file.toLowerCase().endsWith('.jpg')) {
        try {
            const data = fs.readFileSync(path.join(srcDir, file));
            fs.writeFileSync(path.join(destDir, file), data);
            console.log(`Successfully copied ${file}`);
        } catch (e) {
            console.error(`Failed to copy ${file}: ${e.message}`);
        }
    }
});
console.log('Sync complete.');
