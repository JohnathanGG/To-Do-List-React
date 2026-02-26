import "dotenv/config";
import mongoose from "mongoose";

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI;
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1); // stop the app if DB fails
  }
};

export default connectDB;
