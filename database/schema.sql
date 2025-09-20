-- Way2Upskill Database Schema
-- PostgreSQL Database Setup for Way2Upskill Application

-- Create database (run this first if not already created)
-- CREATE DATABASE way2upskill_db;

-- Connect to the database and run the following commands:

-- Users table for login/signup functionality
CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    phone VARCHAR(20) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(50) UNIQUE,
    password_hash VARCHAR(255),
    interested_subject VARCHAR(50),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Courses table
CREATE TABLE IF NOT EXISTS courses (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration VARCHAR(50),
    price DECIMAL(10,2) NOT NULL,
    category VARCHAR(100),
    level VARCHAR(50),
    instructor_id UUID,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enrollments table
CREATE TABLE IF NOT EXISTS enrollments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES users(id) ON DELETE CASCADE,
    course_id UUID REFERENCES courses(id) ON DELETE CASCADE,
    enrollment_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    status VARCHAR(50) DEFAULT 'pending',
    payment_status VARCHAR(50) DEFAULT 'pending',
    payment_plan VARCHAR(50),
    payment_method VARCHAR(50),
    total_amount DECIMAL(10,2),
    paid_amount DECIMAL(10,2) DEFAULT 0,
    -- Personal Information
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    email VARCHAR(255),
    phone VARCHAR(20),
    address TEXT,
    city VARCHAR(100),
    state VARCHAR(100),
    zip VARCHAR(20),
    country VARCHAR(100),
    -- Background Information
    education VARCHAR(100),
    field VARCHAR(100),
    employment_status VARCHAR(50),
    programming_experience VARCHAR(50),
    goals TEXT,
    linkedin VARCHAR(255),
    github VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(user_id, course_id)
);

-- Contact messages table
CREATE TABLE IF NOT EXISTS contacts (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    subject VARCHAR(255),
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'new',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Instructors table
CREATE TABLE IF NOT EXISTS instructors (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    phone VARCHAR(20),
    specialization TEXT,
    bio TEXT,
    linkedin VARCHAR(255),
    github VARCHAR(255),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
CREATE INDEX IF NOT EXISTS idx_users_username ON users(username);
CREATE INDEX IF NOT EXISTS idx_enrollments_user_id ON enrollments(user_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_course_id ON enrollments(course_id);
CREATE INDEX IF NOT EXISTS idx_enrollments_status ON enrollments(status);
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update updated_at
CREATE TRIGGER update_users_updated_at 
    BEFORE UPDATE ON users 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_courses_updated_at 
    BEFORE UPDATE ON courses 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_enrollments_updated_at 
    BEFORE UPDATE ON enrollments 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_instructors_updated_at 
    BEFORE UPDATE ON instructors 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data
INSERT INTO courses (title, description, duration, price, category, level) VALUES
('Full Stack Web Development', 'Master modern web development from frontend to backend with React, Node.js, and cloud deployment.', '10 Weeks', 300.00, 'Web Development', 'Beginner to Advanced'),
('Professional AI/ML & Generative AI Career Accelerator', 'Transform your career with our intensive AI/ML program. From Python foundations to advanced GenAI systems.', '8 Weeks', 300.00, 'AI/ML', 'Intermediate'),
('DevOps Engineering', 'Learn CI/CD, containerization, cloud infrastructure, and automation tools for modern software delivery.', '8 Weeks', 350.00, 'DevOps', 'Intermediate'),
('Cloud Computing', 'Master AWS, Azure, and GCP with hands-on experience in cloud architecture and serverless computing.', '10 Weeks', 350.00, 'Cloud Computing', 'Intermediate'),
('Cybersecurity', 'Comprehensive cybersecurity training covering ethical hacking, penetration testing, and security protocols.', '12 Weeks', 300.00, 'Cybersecurity', 'Beginner to Advanced')
ON CONFLICT DO NOTHING;

INSERT INTO instructors (first_name, last_name, email, phone, specialization, bio, linkedin) VALUES
('Mohammad', 'Shafaque Arif', 'letsupskill57@gmail.com', '+91 9611513741', 'Full Stack, AI/ML, DevOps, Cloud Computing, Cybersecurity', 'Experienced tech professional with deep expertise in multiple tech domains. Committed to student success and career growth.', 'https://www.linkedin.com/in/shafaquearif26/')
ON CONFLICT (email) DO NOTHING;

-- Grant permissions (if needed for different users)
-- GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO your_app_user;
-- GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO your_app_user;
