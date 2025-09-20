# Database Setup for Login/Signup Feature

## Users Table Setup

To enable the login/signup functionality, you need to create the users table in your Supabase database.

### Steps:

1. **Access Supabase Dashboard**
   - Go to your Supabase project dashboard
   - Navigate to the SQL Editor

2. **Run the SQL Script**
   - Copy and paste the contents of `supabase/users_table.sql`
   - Execute the script to create the users table

3. **Verify Table Creation**
   - Go to Table Editor in Supabase
   - You should see the `users` table with the following columns:
     - `id` (UUID, Primary Key)
     - `first_name` (VARCHAR)
     - `last_name` (VARCHAR)
     - `phone` (VARCHAR)
     - `email` (VARCHAR, Unique)
     - `username` (VARCHAR, Unique)
     - `password_hash` (VARCHAR)
     - `interested_subject` (VARCHAR)
     - `is_active` (BOOLEAN)
     - `created_at` (TIMESTAMP)
     - `updated_at` (TIMESTAMP)

## Features Included:

- ✅ **User Registration**: Users can sign up with personal details and subject interest
- ✅ **Email Uniqueness**: Prevents duplicate email registrations
- ✅ **Subject Selection**: Users can specify their area of interest
- ✅ **Row Level Security**: Secure data access policies
- ✅ **Auto Timestamps**: Automatic creation and update timestamps
- ✅ **Indexes**: Optimized for email and username lookups

## Security Features:

- Row Level Security (RLS) enabled
- Users can only read/update their own data
- Anyone can sign up (controlled signup process)
- Automatic timestamp updates

## Usage:

Once the table is created, users can:
1. Click "Login/Signup" in the navbar
2. Choose between Login or Signup tabs
3. Fill out the appropriate form
4. Submit to create account or login

The signup form includes:
- First Name
- Last Name
- Phone Number
- Email Address
- Subject Interest (dropdown selection)
