import Employee from "../models/Employee.js";
import multer from "multer";
import path from "path";

// Configure multer for file uploads

const storage = multer.diskStorage({
    destination:(req, file, cb) =>{
        cb(null, 'uploads/');
    },
    filename:(req, file, cb) =>{
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

export const postSignupEmp = async (req, res) => {
    try {
        const{ fullName, email, phoneNumber, collegeOrUniversity, address, district, gender, birthday} = req.body;

        //Handling file uploads
        const profileImagePath = req.file ? req.file.path : null;

        const newEmployee = new Employee({
            fullName,
            email,
            phoneNumber,
            collegeOrUniversity,
            address,
            district,
            gender,
            birthday: new Date(birthday),
            profileImage: profileImagePath,
        });

        res.status(201).json({ 
            message: "Employee profile created successfully", 
            employee: newEmployee 
        });

    
    } catch (error) {
        console.error("Error creating employee profile:", error);
        res.status(500).json({
            message: "Error creating employee profile",
            error: error.message    
        });
    }
}