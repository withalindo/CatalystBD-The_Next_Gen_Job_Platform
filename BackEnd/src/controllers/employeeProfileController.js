import Employee from "../models/Employee.js";
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
  
        cb(null, path.join(__dirname, '../../uploads/')); 
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`); 
    }
});

export const upload = multer({ storage: storage });


export const createEmployeeProfile = async (req, res) => {
    try {
        const {
            fullname,
            email,
            phoneNumber,
            collegeOrUniversity,
            address,
            district,
            gender,
            birthdate
        } = req.body;

    
        const profileImagePath = req.file ? `/uploads/${req.file.filename}` : null;

        
        if (!fullname || !email || !phoneNumber || !collegeOrUniversity || !address || !district || !gender || !birthdate) {
            return res.status(400).json({ message: 'All required fields must be provided.' });
        }

        
        const existingEmployee = await Employee.findOne({ email });
        if (existingEmployee) {
            return res.status(409).json({ message: 'Employee with this email already exists.' }); 
        }

        const newEmployee = new Employee({
            fullName: fullname,
            email,
            phoneNumber,
            collegeOrUniversity,
            address,
            district,
            gender,
            birthdate: new Date(birthdate), 
            profileImage: profileImagePath, 
        });

        await newEmployee.save();
        res.status(201).json({ message: 'Profile created successfully', employee: newEmployee });
    } catch (error) {
        console.error('Error creating employee profile:', error);
        // Handle Multer errors specifically
        if (error instanceof multer.MulterError) {
            return res.status(400).json({ message: `File upload error: ${error.message}` });
        }
        res.status(500).json({ message: 'Failed to create profile', error: error.message });
    }
};