const Booking = require('../models/booking');
const ERROR_MESSAGE   = require('../constants/error-message');

Booking_info = async (request, result, next) => {
    const { name, email, contact, destination, people, arrival, dept } = request.body;
  console.log(request.body);
    const departure = dept;
    try {
      const booking = new Booking({
        name,
        email,
        contact,
        destination,
        people,
        arrival,
        departure
      });
      await booking.save();
      return next({ code: 'success', message: 'Booking request placed successfully!'});
    } catch (error) {
        return next({ code: 'error', message: ERROR_MESSAGE.SOMETING_WENT_WRONG});
    }
};

module.exports = { Booking_info };