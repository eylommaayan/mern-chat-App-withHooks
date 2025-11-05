// db/connectToMongoDB.js
import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    // דיבאג: מי המשתמש שה־.env טוען כרגע?
    const userInUri = process.env.MONGO_DB_URI?.match(/\/\/(.*?):/i)?.[1];
    console.log("Mongo URI user:", userInUri);

    await mongoose.connect(process.env.MONGO_DB_URI, { dbName: "chat-app" });
    console.log("Connected to MongoDB successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectToMongoDB;
