const mongoose = require("mongoose");

const Student = new mongoose.Schema({
  f_name: { type: String },
  l_name: { type: String },
  email: { type: String, trim: true },
  index_number:{type:String,trim:true,unique:true},
  password:{type:String,required:true},
  gender: { type: String, trim: true },
  level: { type: String, required: true },
  date: { type: String },
});

const student = mongoose.model("Students", Student);

module.exports = student;
