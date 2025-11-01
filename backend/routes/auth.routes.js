import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";

const router = express.Router();

// מרשמים משתמש חדש
router.post("/signup", signup);

// התחברות עם אימייל/סיסמה
router.post("/login", login);

// התנתקות (ניקוי טוקן/סשן)
router.post("/logout", logout);

export default router;
