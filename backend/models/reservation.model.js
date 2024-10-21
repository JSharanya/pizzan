// models/Reservation.js
import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true,
    },
    contactInfo: {
        type: String,
        required: true,
    },
    reservationDate: {
        type: Date,
        required: true,
    },
    reservationTime: {
        type: String,
        required: true, // You can use Date or String based on your time format
    },
    numberOfPeople: {
        type: Number,
        required: true,
        min: 1,
    },
});

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;
