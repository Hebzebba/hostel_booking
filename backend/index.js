const express = require("express");
const cor = require("cors");
const router = require("./routes/addData");

const mongoose = require("mongoose");

const app = express();
const port = 5000;
const data = require("./data");

mongoose.connect("mongodb://localhost/hostel_booking", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("Connection to the database is established");
});

app.use("/datalist", router);

app.use(cor());
app.get("/api/", (req, res) => {
  res.send(data);
});

app.get("/api/:id", (req, res) => {
  const singleData = data.find((data) => data._id === req.params.id);
  res.send(singleData);
});
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
