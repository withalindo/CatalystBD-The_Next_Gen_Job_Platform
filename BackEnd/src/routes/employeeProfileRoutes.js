import express from 'express';
// Import both the controller function and the upload middleware from the controller
import { createEmployeeProfile, upload } from '../controllers/employeeProfileController.js'; 

const router = express.Router();


router.post('/post-signup-emp-body', upload.single('profileImage'), createEmployeeProfile);

export default router;