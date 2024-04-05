import mongoose from 'mongoose';
import { config } from 'dotenv';
config();
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected!`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};
export default connectDB;


