import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({

    fullName: {
        type: String,
        required: true,
    },

    googleId: {
        type: String,
    },
    linkedinId: {
        type: String,
    },
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        // required: true,
        required: false, // Made optional for Google OAuth
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    collegeOrUniversity: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    district: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true
    },
    birthdate: {
        type: Date,
        required: true,
    },
    // profileImage: {
    //     type: String, // URL or path to the uploaded image
    //     required: false, // Made optional for Google OAuth
    // },


    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;