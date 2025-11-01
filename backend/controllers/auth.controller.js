// backend/controllers/auth.controller.js

export const signup = (req, res) => {
 try {
  const {fullName, username, password, confimPassword, gender} = req.body
 } catch (error) {
}

export const login = (req, res) => {
  console.log("Login controller called");
  res.json({ route: "login", status: "ok" });
};

export const logout = (req, res) => {
  console.log("Logout controller called");
  res.json({ route: "logout", status: "ok" });
};
