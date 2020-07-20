const mongoose = require("mongoose");

const Admin = new mongoose.Schema({
  admin_name: { type: String },
  password: { type: String, trim: true },
});

const admin = mongoose.model("HostelAdmin", Admin);

module.exports = admin;
