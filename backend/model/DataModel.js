const mongoose = require("mongoose");

const Hostel = new mongoose.Schema({
  hostel_name: { type: String, trim: true },
  price: { type: Number, trim: true },
  number_of_rooms: { type: Number, trim: true },
  hostel_image: { type: String, required: true },
  map_area: { type: String, trim: true },
});

const hostels = mongoose.model("Hostels", Hostel);

module.exports = hostels;
