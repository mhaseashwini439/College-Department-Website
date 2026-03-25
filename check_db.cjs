const mysql = require('mysql2/promise');
require('dotenv').config({ path: './server/.env' });

async function checkDB() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
        });
        const [rows] = await connection.execute('SHOW TABLES');
        console.log('Tables in database:', rows.map(r => Object.values(r)[0]));
        await connection.end();
    } catch (err) {
        console.error('Error checking DB:', err.message);
    }
}
checkDB();
