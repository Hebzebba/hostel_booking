const express = require("express");
const cor = require("cors");
const path = require("path");
const router = require("./routes/router");

const mongoose = require("mongoose");

const app = express();
const port = 5000;
const data = require("./data");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./public")));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(cor());
app.use(router);

mongoose.connect("mongodb://localhost:27017/hostelBooking", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected");
});

app.get("/api/:id", (req, res) => {
  const singleData = data.find((data) => data._id === req.params.id);
  res.send(singleData);
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
app.get("/api/", (req, res) => {
  res.send(data);
});
