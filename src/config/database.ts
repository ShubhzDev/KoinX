import mongoose from 'mongoose';

const connectDB = async (): Promise<void> => {
  try {
    const mongoUrl = process.env.MONGO_DB_URL;
    if (!mongoUrl) {
      throw new Error('MongoDB URL is not defined in environment variables');
    }
    await mongoose.connect(mongoUrl);
    console.log('Connected to Database Successfully!!!');
  } catch (err) {
    console.error('Error Connecting to Database!!!');
    process.exit(1);
  }
};

export default connectDB;