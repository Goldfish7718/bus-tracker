import {
  fetchStudents,
  registerStudent,
} from "../controllers/studentControllers.js";
import { Router } from "express";

const router = Router();

router.post("/register", registerStudent);
router.get("/get", fetchStudents);

export default router;
