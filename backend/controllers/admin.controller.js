import Admin from '../models/admin.model.js';
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';
import { errorHandler } from "../utils/error.js";

export const login = async (req, res, next) => {
  const { email, password } = req.body;

  // Check if email and password are provided
  if (!email || !password || email === "" || password === "") {
    return next(errorHandler(400, "All fields are required"));
  }

  try {
    // Find the admin by email
    const validAdmin = await Admin.findOne({ email });
    if (!validAdmin) {
      return next(errorHandler(404, "Admin not found"));
    }

    // Compare password (not hashed)
    if (validAdmin.password !== password) {
      return next(errorHandler(400, "Invalid password"));
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: validAdmin._id, isAdmin: true }, // Assuming all admins have isAdmin set to true
      process.env.JWT_SECRET, // Use your JWT secret
      { expiresIn: '1h' } // Set token expiration
    );

    // Exclude password from the response
    const { password: pass, ...rest } = validAdmin._doc;

    // Send response with token and admin data (excluding password)
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true, // Cookie is not accessible via JavaScript
      })
      .json(rest);
  } catch (error) {
    next(error); // Call error handler middleware
  }

};

// Registration controller (protected by token)
export const register = async (req, res, next) => {
  const {adminname , email, password } = req.body;

  if (
    !adminname||
    !email ||
    !password ||
    adminname === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All fields are required"));
  }

  const hashedPassword = bcryptjs.hashSync(password, 10);

  try {
    const newAdmin = new Admin({ adminname,email, password }); // Password is stored in plain text
    await newAdmin.save();
    res.json({ message: 'Admin registered successfully!' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

