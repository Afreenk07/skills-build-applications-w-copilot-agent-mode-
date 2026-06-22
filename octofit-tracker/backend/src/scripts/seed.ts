/**
 * Seed the octofit_db database with test data
 */
import mongoose from 'mongoose';

const seedDatabase = async () => {
  try {
    // Your seed logic here
    console.log('Seed the octofit_db database with test data');
  } catch (error) {
    console.error('Seeding error:', error);
  } finally {
    await mongoose.connection.close();
  }
};

seedDatabase();