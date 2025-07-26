import express from "express";
import { postSignupEmpBody, uploadProfileImage } from "../controllers/postSignupEmpBodyController.js";

const router = express.Router();

// Route to handle employee profile submission
router.post("/", uploadProfileImage, postSignupEmpBody);

export default router;