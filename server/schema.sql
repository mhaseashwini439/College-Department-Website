-- Create Database
CREATE DATABASE IF NOT EXISTS college_dept_db;
USE college_dept_db;

-- 1. Notices Table
CREATE TABLE IF NOT EXISTS notices (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    date DATE NOT NULL,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
-- 2. Faculty Table
CREATE TABLE IF NOT EXISTS faculty (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    designation VARCHAR(100),
    qualification VARCHAR(255),
    imageUrl VARCHAR(255),
    specialization VARCHAR(255),
    contact VARCHAR(20),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Timetables Table
CREATE TABLE IF NOT EXISTS timetables (
    id INT AUTO_INCREMENT PRIMARY KEY,
    year VARCHAR(50) NOT NULL,
    pdfUrl VARCHAR(255) NOT NULL,
    semester VARCHAR(50),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Syllabus Table
CREATE TABLE IF NOT EXISTS syllabus (
    id INT AUTO_INCREMENT PRIMARY KEY,
    year VARCHAR(50) NOT NULL,
    level ENUM('UG', 'PG') NOT NULL,
    semester VARCHAR(50),
    syllabusUrl VARCHAR(255),
    pyqUrl VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Events Table
CREATE TABLE IF NOT EXISTS events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    category ENUM('alumni', 'extraCurricular', 'conferences', 'cultural', 'awards', 'social') NOT NULL,
    title VARCHAR(255) NOT NULL,
    date DATE,
    description TEXT,
    imageUrl VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 6. Books Table
CREATE TABLE IF NOT EXISTS books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_year VARCHAR(20) NOT NULL, -- FY, SY, TY, MSC-I, MSC-II
    subject VARCHAR(255) NOT NULL,
    publication VARCHAR(255),
    pdfUrl VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Initial Sample Data (Optional)
INSERT INTO notices (title, date, content) VALUES 
('Admissions Open for 2026-27 Academic Year', '2026-03-10', 'Applications are now being accepted for B.Sc. CS, M.Sc. CS, and BCA programs.');
