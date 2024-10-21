import Reservation from "../models/reservation.model.js";


export const createReservation = async (req, res) => {
    const { customerName, contactInfo, reservationDate, reservationTime, numberOfPeople } = req.body;

    // Check for missing fields
    if (!customerName || !contactInfo || !reservationDate || !reservationTime || !numberOfPeople) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        const formattedDate = new Date(reservationDate);
        const reservation = new Reservation({
            customerName,
            contactInfo,
            reservationDate: formattedDate,
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
        const formattedReservations = reservations.map(reservation => {
            const formattedDate = reservation.reservationDate.toISOString().split('T')[0]; // Format to YYYY-MM-DD
            return {
                ...reservation._doc,
                reservationDate: formattedDate
            };
        });
        res.status(200).json(formattedReservations);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};