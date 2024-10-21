import express from 'express';
import { createReservation, getReservations } from '../controllers/reservation.controller.js';

const router = express.Router();

// Submit a reservation request
router.post('/reservation', createReservation);

// Admin can view the reservation list
router.get('/reservations', getReservations);

export default router;