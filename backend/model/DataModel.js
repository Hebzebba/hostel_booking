const mongoose = require("mongoose");

const Hostel = new mongoose.Schema({
  hostel_name: { type: String, trim: true },
  price: { type: Number, trim: true },
  room_capacity: { type: Number, trim: true },
  description: String,
  distance: Number,
  hostel_type: String,
  hostel_image: { type: [], required: true },
  map_area: { type: String, trim: true },
});

const hostels = mongoose.model("Hostels", Hostel);

module.exports = hostels;
