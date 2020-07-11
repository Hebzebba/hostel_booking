const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: { type: String, trim: true },
  price: { type: Number },
  number_of_rooms: { type: Number },
  map_area: { type: String },
});

const datalist = mongoose.model("datalist", dataSchema);
module.exports = datalist;
