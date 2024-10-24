import { Router } from "express";
import { loginUser, signUpUser } from "../controllers/userControllers.js";

const router = Router();

router.post("/signup", signUpUser);
router.post("/login", loginUser);

export default router;
