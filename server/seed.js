import mongoose from 'mongoose';
import Admin from './models/Admin.js';
import dotenv from 'dotenv';

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/highonhealth');
    console.log('Connected to MongoDB');

    const adminExists = await Admin.findOne({ username: 'admin' });
    if (!adminExists) {
      await Admin.create({
        username: 'admin',
        password: 'password123' // In a real app, hash this!
      });
      console.log('Default admin seeded: admin / password123');
    } else {
      console.log('Admin already exists.');
    }
  } catch (error) {
    console.error('Error seeding admin:', error);
  } finally {
    mongoose.disconnect();
  }
};

seedAdmin();
