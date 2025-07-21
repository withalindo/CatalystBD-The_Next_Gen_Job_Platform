import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({

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
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Employee = mongoose.model("Employee", employeeSchema);

export default Employee;