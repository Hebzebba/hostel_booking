const mongoose = require("mongoose");

const Admin = new mongoose.Schema({
  admin_name: {
    type: String
  },
  email: {
    type: String,
    unique: true,
    trim: true
  },
  password: {
    type: String
  },
});

const admin = mongoose.model("HostelAdmin", Admin);

module.exports = admin;