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

router.route("/add").post(upload.single("hostelImage"), (req, res) => {
  const url = `${req.protocol}`;
  const host = "localhost";
  const port = 5000;

  const Hostel = new hostel({
    hostel_name: req.body.hostel_name,
    price: req.body.price,
    number_of_rooms: req.body.number_of_rooms,
    hostel_image: `${url}://${host}:${port}/images/${req.file.filename}`,
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
