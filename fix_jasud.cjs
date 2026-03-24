const fs = require('fs');
const src = 'd:/Depa_Website/College-Department-Website/Administration/Prof. M.J. Jasud.jpeg';
const dest = 'd:/Depa_Website/College-Department-Website/public/Administration/Prof. M.J. Jasud.jpeg';
try {
    const data = fs.readFileSync(src);
    fs.writeFileSync(dest, data);
    console.log('Copied! File size: ' + data.length + ' bytes');
} catch(e) {
    console.error('Error: ' + e.message);
}
