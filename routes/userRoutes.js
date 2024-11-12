import express from 'express';
import User from "../models/User.js";
import { validateApiKey } from '../middleware/auth.js';
const router = express.Router();

router.post('/', validateApiKey, async (req, res) => {
  try {
    const { name, email, phone, useCase } = req.body;

    // Basic validation
    if (!name || !email || !phone || !useCase) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already registered' });
    }

    // Create and save the new user
    const newUser = new User({ name, email, phone, useCase });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
});

export default router;
