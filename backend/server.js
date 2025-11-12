// backend/server.js
import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";


// טען משתני סביבה מוקדם
dotenv.config();

const app = express(); 
const PORT = process.env.PORT || 5000;

// מידלוורים בסיסיים
app.use(express.json());// to parse the incoming requests with JSON payloads (from req.body)

// ראוטים
app.use("/api/auth", authRoutes);


// האזנה לשרת + חיבור למסד
app.listen(PORT, async () => {
  try {
    await connectToMongoDB();
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (err) {
    console.error("❌ Mongo connection failed:", err.message);
    process.exit(1);
  }
});
