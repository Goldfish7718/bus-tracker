import express from "express";
import mongoose from "mongoose";
import busRoutes from "./routes/BusRoutes.js";
import { config } from "dotenv";

config();

const app = express();

app.use(express.json());
app.use(express.static("public"));

// Use bus routes
app.use("/api/buses", busRoutes);

app.get("/", (req, res) => {
  res.sendFile("index");
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({ message: "Not Found" });
});

// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  mongoose
    .connect(process.env.DATABASE_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.log("Failed to connect to MongoDB", err));
  console.log(`Server is running on port ${PORT}`);
});
