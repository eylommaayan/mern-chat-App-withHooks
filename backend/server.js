// backend/server.js

import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// כדי ש-body יעבוד ב-POST /login
app.use(express.json());

// ראוט בדיקה ראשי
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// פה אנחנו מחברים את כל הראוטים של auth תחת /api/auth
app.use("/api/auth", authRoutes);

// מדליקים את השרת
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
