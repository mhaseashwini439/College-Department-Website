const fs = require('fs');
const path = require('path');

function walk(dir) {
    if (dir.includes('node_modules') || dir.includes('.git') || dir.includes('package')) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const p = path.join(dir, file);
        if (fs.statSync(p).isDirectory()) {
            walk(p);
        } else if (p.endsWith('.jsx') || p.endsWith('.js') || p.endsWith('.css')) {
            let content = fs.readFileSync(p, 'utf8');
            if (content.includes('<<<<<<<')) {
                const regex = /<<<<<<< HEAD\r?\n([\s\S]*?)=======\r?\n[\s\S]*?>>>>>>> [^\r\n]*(?:\r?\n)?/g;
                const newContent = content.replace(regex, "$1");
                if (content !== newContent) {
                    fs.writeFileSync(p, newContent);
                    console.log('Fixed:', p);
                } else {
                    console.log('Regex did not match but found conflict markers in:', p);
                }
            }
        }
    }
}
walk('./src');
