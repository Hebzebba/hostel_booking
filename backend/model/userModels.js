const mongoose = require("mongoose");

const User = new mongoose.Schema({
  full_name: { type: String },
  email: { type: String, trim: true },
  gender: { type: String, trim: true },
  level: { type: String, required: true },
  room_type: { type: String, trim: true },
  tel_number: { type: String },
  date: { type: String },
});

const user = mongoose.model("HostelUser", User);

module.exports = user;
