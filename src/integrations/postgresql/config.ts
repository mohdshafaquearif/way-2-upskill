import { Pool } from 'pg';

// PostgreSQL Database Configuration
const dbConfig = {
  host: 'localhost',
  port: 5432,
  database: 'way2upskill_db',
  user: process.env.DB_USER || 'praptiwamre', // Your system username
  password: process.env.DB_PASSWORD || '', // No password for local development
  max: 20, // Maximum number of clients in the pool
  idleTimeoutMillis: 30000, // Close idle clients after 30 seconds
  connectionTimeoutMillis: 2000, // Return an error after 2 seconds if connection could not be established
};

// Create a connection pool
export const pool = new Pool(dbConfig);

// Test the connection
pool.on('connect', () => {
  console.log('✅ Connected to PostgreSQL database');
});

pool.on('error', (err) => {
  console.error('❌ PostgreSQL connection error:', err);
});

// Helper function to execute queries
export const query = async (text: string, params?: any[]) => {
  const start = Date.now();
  try {
    const res = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('📊 Query executed:', { text, duration, rows: res.rowCount });
    return res;
  } catch (error) {
    console.error('❌ Query error:', error);
    throw error;
  }
};

// Helper function to get a client from the pool
export const getClient = async () => {
  return await pool.connect();
};

// Database operations
export const db = {
  // User operations
  async createUser(userData: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    username?: string;
    passwordHash?: string;
    interestedSubject?: string;
  }) {
    const { firstName, lastName, email, phone, username, passwordHash, interestedSubject } = userData;
    const result = await query(
      `INSERT INTO users (first_name, last_name, email, phone, username, password_hash, interested_subject)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING *`,
      [firstName, lastName, email, phone, username, passwordHash, interestedSubject]
    );
    return result.rows[0];
  },

  async getUserByEmail(email: string) {
    const result = await query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
  },

  async getUserByUsername(username: string) {
    const result = await query('SELECT * FROM users WHERE username = $1', [username]);
    return result.rows[0];
  },

  // Enrollment operations
  async createEnrollment(enrollmentData: {
    userId: string;
    courseId: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address?: string;
    city?: string;
    state?: string;
    zip?: string;
    country?: string;
    education?: string;
    field?: string;
    employmentStatus?: string;
    programmingExperience?: string;
    goals?: string;
    linkedin?: string;
    github?: string;
    paymentPlan?: string;
    paymentMethod?: string;
    totalAmount?: number;
  }) {
    const {
      userId, courseId, firstName, lastName, email, phone, address, city, state, zip, country,
      education, field, employmentStatus, programmingExperience, goals, linkedin, github,
      paymentPlan, paymentMethod, totalAmount
    } = enrollmentData;

    const result = await query(
      `INSERT INTO enrollments (
        user_id, course_id, first_name, last_name, email, phone, address, city, state, zip, country,
        education, field, employment_status, programming_experience, goals, linkedin, github,
        payment_plan, payment_method, total_amount
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21)
      RETURNING *`,
      [
        userId, courseId, firstName, lastName, email, phone, address, city, state, zip, country,
        education, field, employmentStatus, programmingExperience, goals, linkedin, github,
        paymentPlan, paymentMethod, totalAmount
      ]
    );
    return result.rows[0];
  },

  // Contact operations
  async createContact(contactData: {
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    subject?: string;
    message: string;
  }) {
    const { firstName, lastName, email, phone, subject, message } = contactData;
    const result = await query(
      `INSERT INTO contacts (first_name, last_name, email, phone, subject, message)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING *`,
      [firstName, lastName, email, phone, subject, message]
    );
    return result.rows[0];
  },

  // Course operations
  async getAllCourses() {
    const result = await query('SELECT * FROM courses WHERE is_active = true ORDER BY created_at DESC');
    return result.rows;
  },

  async getCourseById(id: string) {
    const result = await query('SELECT * FROM courses WHERE id = $1 AND is_active = true', [id]);
    return result.rows[0];
  },

  // Instructor operations
  async getAllInstructors() {
    const result = await query('SELECT * FROM instructors WHERE is_active = true ORDER BY created_at DESC');
    return result.rows;
  },

  async getInstructorById(id: string) {
    const result = await query('SELECT * FROM instructors WHERE id = $1 AND is_active = true', [id]);
    return result.rows[0];
  }
};

export default db;
