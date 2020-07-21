const router = require("express").Router();
const hostel = require("../model/DataModel");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  // limits: {
  //   filesize: 1024 * 1024,
  // },
});

// const upload = multer({ dest: "ImageUpload" });

router.route("/datalist").get((req, res) => {
  hostel
    .find()
    .then((dat) => {
      res.send(dat);
    })

    .catch((error) => console.log("error"));
});

router.route("/add").post(upload.array("hostelImage", 20), (req, res) => {
  const url = `${req.protocol}`;
  const host = "localhost";
  const port = 5000;

  const Hostel = new hostel({
    hostel_name: req.body.hostel_name,
    price: req.body.price,
    room_capacity: req.body.room_capacity,
    description: req.body.description,
    distance: req.body.distance,
    hostel_type: req.body.hostel_type,
    hostel_image: req.files.map(
      (file) => `${url}://${host}:${port}/images/${file.filename}`
    ),
    map_area: req.body.map_area,
  });
  Hostel.save()
    .then((result) => {})
    .catch((err) => {
      console.log("Error");
    });
  res.status(201).json({
    message: "Handling post request",
    createdHostel: Hostel,
  });
});

router.route("/details/:id").get((req, res) => {
  const id = req.params.id;
  hostel
    .findOne({ _id: id })
    .then((result) => res.json(result))
    .catch((err) => err);
});

router.route("/delete/:id").delete((req, res) => {
  const id = req.params.id;
  hostel
    .deleteOne({ _id: id })
    .exec()
    .then((result) => {
      res.send({
        message: "Data removed",
        result,
      });
    })
    .catch((err) => err);
});

module.exports = router;
