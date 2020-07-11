const router = require("express").Router();
const datalist = require("../models/hostelData.model");

router.route("/").get((req, res) => {
  datalist
    .find()
    .then((data) => res.json(data))
    .catch((error) => {
      console.log(`No data found ${error}`);
    });
});

router.route("/add").post((req, res) => {
  const name = req.body.name;
  const price = Number(req.body.price);
  const number_of_rooms = Number(req.body.number_of_rooms);
  const map_area = req.body.map_area;

  const newData = new datalist({ name, price, number_of_rooms, map_area });
  newData.save();

  datalist
    .find()
    .then((data) => res.json("Data added"))
    .catch((error) => {
      console.log(`No data found ${error}`);
    });
});

module.exports = router;
