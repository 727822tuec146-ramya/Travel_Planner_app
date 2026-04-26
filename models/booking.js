const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: { type: String },
    email: { type: String },
    contact: { type: String },
    destination: { type: String },
    people: { type: Number },
    arrival: { type: Date},
    departure: { type: Date },
});

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;
