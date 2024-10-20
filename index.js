import express from "express";
import mongoose from "mongoose";
import studentRoutes from "./routes/studentRoutes.js";
import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const PORT = process.env.PORT || 3000;

config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static("public"));

app.use("/api/students", studentRoutes);

app.get("/", (req, res) => {
  res.sendFile("index");
});

app.get("/tracker", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "tracker.html"));
});

app.get("/busroutes", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "busroutes.html"));
});

app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "form.html"));
});

app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin.html"));
});

app.get("/driver-details", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "driverdetails.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login.html"));
});

app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

app.listen(PORT, () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect to MongoDB", err));
  console.log(`Server is running on port ${PORT}`);
});
