import { Router } from "express";
import { signUpUser } from "../controllers/userControllers.js";

const router = Router();

router.post("/signup", signUpUser);

export default router;
