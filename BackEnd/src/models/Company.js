import mongoose from "mongoose";

const companySchema = new mongoose.Schema({

  googleId: {
    type: String,
  },
  linkedinId: {
    type: String,
  },
  companyName: {
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
    required: false, // Made optional for OAuth
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Company = mongoose.model("Company", companySchema);

export default Company;