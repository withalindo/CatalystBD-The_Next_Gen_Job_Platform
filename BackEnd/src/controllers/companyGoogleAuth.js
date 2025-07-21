import dotenv from "dotenv";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

import Company from "../models/Company.js";

dotenv.config();

passport.use("google-company",
    new GoogleStrategy(
        {
            clientID: process.env.Google_Client_ID,
            clientSecret: process.env.Google_Client_Secret,
            callbackURL: "http://localhost:5000/auth/google/company/callback",
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                //Checks if the company already exists in the database
                let company = await Company.findOne({ googleId: profile.id });
                if (!company) {
                    //Creating new Company account
                    company = await Company.create({
                        googleId: profile.id,
                        companyName: profile.displayName,
                        email: profile.emails[0].value,
                    });
                }
                done(null, { user: company, type: "company" });

            } catch (err) {
                console.error("Error in Google Strategy:", err);
                done(err, null);
            }
        }
    )
);
