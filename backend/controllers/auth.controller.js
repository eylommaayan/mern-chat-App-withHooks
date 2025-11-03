// backend/controllers/auth.controller.js

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    console.log("Signup request received:", {
      fullName,
      username,
      gender,
    });

    // כאן בעתיד תוסיף ולידציות, שמירת משתמש, הצפנת סיסמה וכו'
    // לדוגמה:
    // if (password !== confirmPassword) {
    //   return res.status(400).json({ error: "Passwords do not match" });
    // }

    res.json({
      route: "signup",
      status: "ok",
      message: "Signup controller reached",
    });
  } catch (error) {
    console.error("Signup error:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = (req, res) => {
  console.log("Login request received");

  // בעתיד: לבדוק username/password, להחזיר token
  res.json({
    route: "login",
    status: "ok",
    message: "Login controller reached",
  });
};

export const logout = (req, res) => {
  console.log("Logout request received");

  // בעתיד: למחוק קובץ cookie של ה-token / session
  res.json({
    route: "logout",
    status: "ok",
    message: "Logout controller reached",
  });
};
