const express = require('express');
const cors = require('cors');
const db = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// --- Notices Endpoints ---
app.get('/api/notices', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM notices ORDER BY date DESC');
        res.json(rows);
    } catch (err) {
        console.error('GET /api/notices error:', err.message);
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/notices', async (req, res) => {
    const { title, date, content } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO notices (title, date, content) VALUES (?, ?, ?)',
            [title, date, content]
        );
        res.status(201).json({ id: result.insertId, title, date, content });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/notices/:id', async (req, res) => {
    const { title, date, content } = req.body;
    try {
        await db.query(
            'UPDATE notices SET title = ?, date = ?, content = ? WHERE id = ?',
            [title, date, content, req.params.id]
        );
        res.json({ id: req.params.id, ...req.body });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/notices/:id', async (req, res) => {
    try {
        await db.query('DELETE FROM notices WHERE id = ?', [req.params.id]);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --- Faculty Endpoints ---
app.get('/api/faculty', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM faculty');
        res.json(rows);
    } catch (err) {
        console.error('GET /api/faculty error:', err.message);
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/faculty', async (req, res) => {
    const { name, designation, qualification, imageUrl, specialization, contact } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO faculty (name, designation, qualification, imageUrl, specialization, contact) VALUES (?, ?, ?, ?, ?, ?)',
            [name, designation, qualification, imageUrl, specialization, contact]
        );
        res.status(201).json({ id: result.insertId, ...req.body });
    } catch (err) {
        console.error('POST /api/faculty error:', err.message);
        res.status(500).json({ error: err.message });
    }
});

app.put('/api/faculty/:id', async (req, res) => {
    const { name, designation, qualification, imageUrl, specialization, contact } = req.body;
    try {
        await db.query(
            'UPDATE faculty SET name = ?, designation = ?, qualification = ?, imageUrl = ?, specialization = ?, contact = ? WHERE id = ?',
            [name, designation, qualification, imageUrl, specialization, contact, req.params.id]
        );
        res.json({ id: req.params.id, ...req.body });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.delete('/api/faculty/:id', async (req, res) => {
    try {
        await db.query('DELETE FROM faculty WHERE id = ?', [req.params.id]);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --- Timetables Endpoints ---
app.get('/api/timetables', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM timetables');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/timetables', async (req, res) => {
    const { year, pdfUrl, semester } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO timetables (year, pdfUrl, semester) VALUES (?, ?, ?)',
            [year, pdfUrl, semester]
        );
        res.status(201).json({ id: result.insertId, ...req.body });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --- Syllabus Endpoints ---
app.get('/api/syllabus', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM syllabus');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/syllabus', async (req, res) => {
    const { year, level, semester, syllabusUrl, pyqUrl } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO syllabus (year, level, semester, syllabusUrl, pyqUrl) VALUES (?, ?, ?, ?, ?)',
            [year, level, semester, syllabusUrl, pyqUrl]
        );
        res.status(201).json({ id: result.insertId, ...req.body });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --- Events Endpoints ---
app.get('/api/events', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM events');
        // Group by category to match frontend structure if needed
        res.json(rows);
    } catch (err) {
        console.error('GET /api/events error:', err.message);
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/events', async (req, res) => {
    const { category, title, date, description, imageUrl } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO events (category, title, date, description, imageUrl) VALUES (?, ?, ?, ?, ?)',
            [category, title, date, description, imageUrl]
        );
        res.status(201).json({ id: result.insertId, ...req.body });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --- Books Endpoints ---
app.get('/api/books', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM books');
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.post('/api/books', async (req, res) => {
    const { course_year, subject, publication, pdfUrl } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO books (course_year, subject, publication, pdfUrl) VALUES (?, ?, ?, ?)',
            [course_year, subject, publication, pdfUrl]
        );
        res.status(201).json({ id: result.insertId, ...req.body });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// --- Admin Auth Endpoint ---
app.post('/api/admin/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const [rows] = await db.query('SELECT * FROM admins WHERE username = ? AND password = ?', [username, password]);
        if (rows.length > 0) {
            res.json({ success: true, message: 'Login successful' });
        } else {
            res.status(401).json({ success: false, message: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Root endpoint
app.get('/', (req, res) => {
    res.send('College Department API is running...');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
