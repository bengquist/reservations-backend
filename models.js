const mongoose = require("mongoose");
const { Schema } = mongoose;

const reservationSchema = new Schema({
  name: String,
  hotelName: String,
  arrivalDate: String,
  departureDate: String
});

const Reservation = mongoose.model("hotel", reservationSchema);

module.exports = {
  Reservation
};
