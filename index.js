import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import studentRoutes from "./routes/studentRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const PORT = process.env.PORT || 3000;

config();

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/api/students", studentRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.sendFile("index");
});

app.get("/tracker", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "tracker/tracker.html"));
});

app.get("/busroutes", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "busroutes/busroutes.html"));
});

app.get("/form", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "form/form.html"));
});

app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "admin/admin.html"));
});

app.get("/driver-details", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "driverdetails.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "about/about.html"));
});

app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "login/login.html"));
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
