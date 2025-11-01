// backend/server.js

import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";

const app = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

// ראוט בדיקה ראשי
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// מחברים את כל הראוטים של auth תחת /api/auth
app.use("/api/auth", authRoutes);

// מדליקים את השרת
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
