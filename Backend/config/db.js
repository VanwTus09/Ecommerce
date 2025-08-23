import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URI = process.env.MONGODB_URI;

export const mongooseConnection = async () => {
  try {
    await mongoose.connect(URI)
    console.log("✅ MongoDB Atlas connected to TravelVn");
  } catch (error) {
    console.log("err", error);
  }
  
};
