const mongoose = require('mongoose');

const Hostel = new mongoose.Schema({
  hostel_name: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    trim: true
  },

  one_in_identity: {
    type: []
  },

  four_in_identity: {
    type: []
  },
  bed: {
    type: []
  },
  description: String,
  distance: Number,
  hostel_type: String,
  hostel_image: {
    type: []
  },
  map_area: {
    type: String
  },
});

const hostels = mongoose.model('Hostels', Hostel);

module.exports = hostels;