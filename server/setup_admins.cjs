const mysql = require('mysql2/promise');
require('dotenv').config();

async function setupAdmins() {
    try {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASS,
            database: process.env.DB_NAME
        });

        console.log('Connecting to database...');

        await connection.execute(`
            CREATE TABLE IF NOT EXISTS admins (
                id INT AUTO_INCREMENT PRIMARY KEY,
                username VARCHAR(50) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
        `);
        
        await connection.execute("INSERT INTO admins (username, password) VALUES ('admin', 'admin123') ON DUPLICATE KEY UPDATE username=username;");
        
        console.log('SUCCESS: admins table created and initial user added!');
        await connection.end();
    } catch (err) {
        console.error('FAILED:', err.message);
    }
}

setupAdmins();
