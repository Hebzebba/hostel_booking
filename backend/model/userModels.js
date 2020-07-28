const mongoose = require("mongoose");

const User = new mongoose.Schema({
  full_name: {
    type: String
  },

  gender: {
    type: String,
    trim: true
  },
  level: {
    type: String,
    required: true
  },
  room_type: {
    type: String,
    trim: true
  },
  room_code: {
    type: String,
  },
  tel_number: {
    type: String
  },
  date: {
    type: String
  },
});

const user = mongoose.model("HostelUser", User);

module.exports = user;