import 'dotenv/config';
import { connectDB } from '../config/db.js';
import seedDatabase from './seedDatabase.js';

async function main() {
  try {
    console.log('Connecting to database...');
    await connectDB();
    console.log('Seeding database with comprehensive menu items...');
    const result = await seedDatabase();
    console.log('Seeding result:', result);
    console.log('Done.');
    process.exit(0);
  } catch (err) {
    console.error('Seeding failed:', err);
    process.exit(1);
  }
}

main();
