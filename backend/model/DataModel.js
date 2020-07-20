const mongoose = require("mongoose");

const Hostel = new mongoose.Schema({
  hostel_name: { type: String, trim: true },
  price: { type: Number, trim: true },
  room_capacity: { type: Number, trim: true },
  description: String,
  distance: Number,
  hostel_image: { type: String, required: true },
  map_area: { type: String, trim: true },
  hostel_video: { type: String },
});

const hostels = mongoose.model("Hostels", Hostel);

module.exports = hostels;
