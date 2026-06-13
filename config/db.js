import mongoose from 'mongoose';
import { DB_PASSWORD } from './secret.js'; // <-- Додали .js в кінці!

const URI = `mongodb+srv://dimdish4:${DB_PASSWORD}@cluster0.glxh5xe.mongodb.net/?appName=Cluster0`;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log('=== Успешно подключено к MongoDB Atlas! ===');
  } catch (error) {
    console.error('Ошибка подключения к MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;
