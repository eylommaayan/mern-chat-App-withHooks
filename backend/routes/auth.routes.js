// backend/routes/auth.routes.js
import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";

const router = express.Router();

// רישום משתמש חדש
router.post("/signup", signup);

// התחברות עם אימייל/סיסמה
router.post("/login", login);

// התנתקות (ניקוי טוקן/סשן)
router.post("/logout", logout);

// ראוט בדיקה GET כדי שתוכל לבדוק בדפדפן
router.get("/login", (req, res) => {
  res.send("Login route (GET test) is alive ✅");
});

export default router;
