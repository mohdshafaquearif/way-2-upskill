# PostgreSQL Setup Guide for Way2Upskill

## ✅ Installation Complete

PostgreSQL has been successfully installed and configured for the Way2Upskill application.

## 📋 What Was Installed

### 1. **PostgreSQL Database Server**
- **Version**: PostgreSQL 15.14
- **Installation Method**: Homebrew
- **Location**: `/opt/homebrew/opt/postgresql@15/`

### 2. **Database Configuration**
- **Database Name**: `way2upskill_db`
- **Host**: `localhost`
- **Port**: `5432`
- **User**: `praptiwamre` (your system username)

### 3. **Database Schema**
Created the following tables:
- ✅ **users** - User accounts and profiles
- ✅ **courses** - Available courses and pricing
- ✅ **enrollments** - Student enrollment records
- ✅ **contacts** - Contact form submissions
- ✅ **instructors** - Instructor information

## 🚀 How to Start/Stop PostgreSQL

### Start PostgreSQL Service
```bash
brew services start postgresql@15
```

### Stop PostgreSQL Service
```bash
brew services stop postgresql@15
```

### Check Service Status
```bash
brew services list | grep postgresql
```

## 📊 Database Connection

### Connection String
```
postgresql://praptiwamre@localhost:5432/way2upskill_db
```

### Environment Variables
The application uses these environment variables (stored in `.env.local`):
```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=way2upskill_db
DB_USER=praptiwamre
DB_PASSWORD=
```

## 🔧 Database Operations

### Connect to Database
```bash
psql way2upskill_db
```

### View All Tables
```sql
\dt
```

### View Table Structure
```sql
\d table_name
```

### Run Database Test
```bash
node scripts/test-db.js
```

## 📝 Sample Data

The database comes pre-loaded with:

### Courses (5 courses)
- Full Stack Web Development ($300, 10 weeks)
- Professional AI/ML & Generative AI ($300, 8 weeks)
- DevOps Engineering ($350, 8 weeks)
- Cloud Computing ($350, 10 weeks)
- Cybersecurity ($300, 12 weeks)

### Instructor (1 instructor)
- Mohammad Shafaque Arif
- Email: letsupskill57@gmail.com
- LinkedIn: https://www.linkedin.com/in/shafaquearif26/

## 🔄 Application Integration

### Updated Components
- ✅ **LoginSignupModal** - Now uses PostgreSQL for user registration
- ✅ **Enroll Page** - Stores enrollment data in PostgreSQL
- ✅ **Contact Page** - Saves contact messages to PostgreSQL
- ✅ **Database Config** - New PostgreSQL connection module

### Database Helper Functions
Located in `src/integrations/postgresql/config.ts`:
- `db.createUser()` - Create new user account
- `db.createEnrollment()` - Create enrollment record
- `db.createContact()` - Save contact message
- `db.getAllCourses()` - Get all available courses
- `db.getUserByEmail()` - Find user by email

## 🛠️ Troubleshooting

### If PostgreSQL Won't Start
```bash
# Check if service is running
brew services list | grep postgresql

# Restart service
brew services restart postgresql@15

# Check logs
brew services info postgresql@15
```

### If Database Connection Fails
1. Ensure PostgreSQL is running: `brew services start postgresql@15`
2. Check if database exists: `psql -l | grep way2upskill_db`
3. Verify connection: `psql way2upskill_db`

### Reset Database (if needed)
```bash
# Drop and recreate database
dropdb way2upskill_db
createdb way2upskill_db
psql way2upskill_db -f database/schema.sql
```

## 📈 Next Steps

1. **Test the Application**: Run the app and test login/signup functionality
2. **Add More Data**: Insert additional courses or instructors as needed
3. **Backup Strategy**: Set up regular database backups
4. **Production Setup**: Configure for production environment when ready

## 🎯 Benefits of PostgreSQL Setup

- ✅ **Local Development**: No external dependencies
- ✅ **Full Control**: Complete database management
- ✅ **Performance**: Optimized for your specific use case
- ✅ **Cost Effective**: No cloud database costs
- ✅ **Offline Development**: Works without internet connection
- ✅ **Data Privacy**: All data stays on your machine

The application is now ready to use with PostgreSQL as the backend database!
