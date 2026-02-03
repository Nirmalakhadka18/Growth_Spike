# Data Storage Guide

This folder acts as a simple file-based database for the purpose of this demo.

## How it works

- **leads.json**: Used to store contact form submissions from the website.
- **blog.json**: Contains the content for the blog posts.

This setup allows the application to be fully functional without needing a complex external database server setup.

## Moving to Production (Migration Guide)

For a real-world production application facing high traffic, you should migrate from these JSON files to a proper database.

### Option 1: MongoDB

1. Install Mongoose:
   ```bash
   npm install mongoose
   ```

2. Create a Schema (`src/models/Lead.ts`):
   ```typescript
   import mongoose from 'mongoose';

   const leadSchema = new mongoose.Schema({
     name: String,
     email: String,
     company: String,
     message: String,
     status: { type: String, default: 'New' },
     date: { type: Date, default: Date.now }
   });

   export const Lead = mongoose.models.Lead || mongoose.model('Lead', leadSchema);
   ```

3. Update `src/app/actions.ts` to save to MongoDB instead of writing to `leads.json`.

### Option 2: MySQL

1. Install MySQL client:
   ```bash
   npm install mysql2
   ```

2. Create your table:
   ```sql
   CREATE TABLE leads (
     id INT AUTO_INCREMENT PRIMARY KEY,
     name VARCHAR(255) NOT NULL,
     email VARCHAR(255) NOT NULL,
     company VARCHAR(255),
     message TEXT,
     status VARCHAR(50) DEFAULT 'New',
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

3. Connect in `src/app/actions.ts` using a library like Drizzle ORM or Prisma to write new rows.
