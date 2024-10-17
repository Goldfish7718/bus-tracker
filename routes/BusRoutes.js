import { Router } from "express";
import BusLocation from "../models/BusLocation.js";

const router = Router();

// Get all bus locations
router.get("/locations", async (req, res) => {
  try {
    const locations = await BusLocation.find();
    res.json(locations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a random bus location
router.post("/add-location", async (req, res) => {
  const baseLat = 20.01; // Approx base latitude (Nashik)
  const baseLng = 73.79; // Approx base longitude (Nashik)

  const randomLat = baseLat + (Math.random() * 0.02 - 0.01); // Random variation
  const randomLng = baseLng + (Math.random() * 0.02 - 0.01);

  const location = new BusLocation({
    latitude: randomLat,
    longitude: randomLng,
  });

  try {
    const newLocation = await location.save();
    res.status(201).json(newLocation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
