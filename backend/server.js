// backend/server.js
import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import connectToMongoDB from "./db/connecToMongoDB.js"; // ודא שהשם בקובץ עם ה-t

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRoutes);

const start = async () => {
  await connectToMongoDB();          // ← קודם DB
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

start();
