const fs = require('fs');
try {
    const filePath = 'Administration/Prof. S.B. Khalekar.jpeg';
    const stats = fs.statSync(filePath);
    console.log(`File: ${filePath}`);
    console.log(`Size: ${stats.size} bytes`);
    const fd = fs.openSync(filePath, 'r');
    const buf = Buffer.alloc(8);
    fs.readSync(fd, buf, 0, 8, 0);
    console.log('Magic: ' + buf.toString('hex'));
} catch (e) { console.error(e.message); }
