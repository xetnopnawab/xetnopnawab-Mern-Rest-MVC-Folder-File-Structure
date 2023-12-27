import { DB_NAME } from "../../constants.js";
import mongoose from "mongoose";

// MongoDB Connection
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB Connected !! DB Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDB Connection Failed:", error);
    process.exit(1);
  }
};
export default connectDB;
