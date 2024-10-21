import Reservation from "../models/reservation.model.js";


export const createReservation = async (req, res) => {
    const { customerName, contactInfo, reservationDate, reservationTime, numberOfPeople } = req.body;

    // Check for missing fields
    if (!customerName || !contactInfo || !reservationDate || !reservationTime || !numberOfPeople) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        const reservation = new Reservation({
            customerName,
            contactInfo,
            reservationDate,
            reservationTime,
            numberOfPeople,
        });
        
        await reservation.save();
        res.status(201).json(reservation);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get the reservation list (Admin access)
export const getReservations = async (req, res) => {
    try {
        const reservations = await Reservation.find();
        res.status(200).json(reservations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};