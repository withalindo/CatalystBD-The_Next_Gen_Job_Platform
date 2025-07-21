import express from "express";
import passport from "passport";

const router = express.Router();

// Google Authentication Routes
router.get("/google", passport.authenticate("google-employee", { scope: ["profile", "email"] }));
router.get("/google/company", passport.authenticate("google-company", { scope: ["profile", "email"] }));

// LinkedIn Authentication Routes
router.get("/linkedin", passport.authenticate("linkedin-employee", { scope: ["r_emailaddress", "r_liteprofile"] }));
router.get("/linkedin/company", passport.authenticate("linkedin-company", { scope: ["r_emailaddress", "r_liteprofile"] }));

// Google Callback Route
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    // Successful authentication
    res.redirect("http://localhost:5173/login"); // Redirect to the login page
  }
);

// // Login Route
// router.get("/login", (req, res) => {
//   res.send("http://localhost:5173/dashboard"); // Replace with actual login page rendering
// });

// Logout
router.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return res.status(500).json({ message: 'Error logging out', error: err });
    }
    res.status(200).json({ message: 'Logged out successfully' });
  });
});

export default router;

