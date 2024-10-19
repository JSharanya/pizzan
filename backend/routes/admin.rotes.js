import express from 'express';
import { login, register } from '../controllers/admin.controller.js';

const router = express.Router();

// Login route
router.post('/login', login);

// Register route (protected by JWT)
router.post('/register', register);

export default router;