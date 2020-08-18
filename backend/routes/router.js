const router = require('express').Router();
const hostel = require('../model/DataModel');
const Admin = require('../model/adminData');
const User = require('../model/Booking');
const Student = require('../model/students');

const multer = require('multer');
var jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0//P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './public/images');
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);
	},
});

const upload = multer({
	storage: storage,
	limits: {
		filesize: 1024 * 1024,
	},
});

// const upload = multer({ dest: "ImageUpload" });

router.route('/datalist').get((req, res) => {
	hostel
		.find()
		.then((dat) => {
			res.send(dat);
		})

		.catch((error) => console.log('error'));
});

router.route('/upload').post(upload.array('hostel_image'), (req, res) => {
	res.status(201).json({
		msg: 'Upload successful',
	});
});

router.route('/add').post(upload.array('hostel_image'), (req, res) => {
	const url = `${req.protocol}`;
	const host = 'localhost';
	const port = 5000;

	const Hostel = new hostel({
		hostel_name: req.body.hostel_name,
		price: req.body.price,
		one_in_identity: req.body.one_in_identity,
		four_in_identity: req.body.four_in_identity,
		description: req.body.description,
		distance: req.body.distance,
		merchant_id:req.body.merchant_id,
		hostel_type: req.body.hostel_type,
		hostel_image: req.body.hostel_image.map(
			(name) => `${url}://${host}:${port}/images/${name}`
		),
		map_area: req.body.map_area,
	});
	Hostel.save()
		.then((result) => {})
		.catch((err) => {
			console.log(err);
		});
	res.status(201).json({
		message: 'Handling post request',
		createdHostel: Hostel,
	});
});

router.route('/details/:id').get((req, res) => {
	const id = req.params.id;
	hostel
		.findOne({
			_id: id,
		})
		.then((result) => res.json(result))
		.catch((err) => err);
});

router.route('/delete/:id').delete((req, res) => {
	const id = req.params.id;
	hostel
		.deleteOne({
			_id: id,
		})
		.exec()
		.then((result) => {
			res.send({
				message: 'Data removed',
				result,
			});
		})
		.catch((err) => err);
});

// Student booking
router.route('/booking').post((req, res) => {
	const user = new User({
		full_name: req.body.full_name,
		gender: req.body.gender,
		level: req.body.level,
		room_type: req.body.room_type,
		room_code: req.body.room_number,
		bed: req.body.bed,
		hostel_type: req.body.hostel_type,
		tel_number: req.body.tel_number,
		date: req.body.date,
	});

	user.save()
		.then((response) => ({
			msg: 'User booking sucessfully',
		}))
		.catch((err) => err);
});

// User Authentication

router.route('/signup').post((req, res) => {
	Admin.find({
		email: req.body.email,
	})
		.exec()
		.then((result) => {
			if (result.length >= 1) {
				return res.status(409).json({
					msg: 'User with that email already exist',
				});
			} else {
				bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
					const admin = new Admin({
						admin_name: req.body.admin_name,
						email: req.body.email,
						password: hash,
					});
					admin
						.save()
						.then((result) => {
							res.send({
								msg: 'User added',
								result,
							});
						})
						.catch((err) => err);
				});
			}
		})
		.catch();
});

router.route('/adminlogin').post((req, res) => {
	Admin.find({
		email: req.body.email,
	})
		.exec()
		.then((user) => {
			if (user.length < 1) {
				res.status(401).json({
					msg: 'Data  not found',
				});
			} else {
				bcrypt.compare(req.body.password, user[0].password, function (
					err,
					resu
				) {
					if (resu) {
						let token = jwt.sign(
							{
								name: user[0].admin_name,
								email: user[0].email,
							},
							process.env.JWT_KEY,
							{
								expiresIn: '1h',
							}
						);

						res.status(201).json({
							msg: 'Auth sucessfull',
							token: token,
						});
					} else {
						res.status(401).json({
							msg: 'Did not match',
						});
					}
				});
			}
		})
		.catch((err) => err);
});

router.route('/studentSignup').post((req, res) => {
	Student.find({
		email: req.body.index_number,
	})
		.exec()
		.then((result) => {
			if (result.length >= 1) {
				return res.status(409).json({
					msg: 'User with that email already exist',
				});
			} else {
				bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
					const student = new Student({
						f_name: req.body.f_name,
						l_name: req.body.l_name,
						email: req.body.email,
						index_number: req.body.index_number,
						password: hash,
						gender: req.body.gender,
						level: req.body.level,
						date: req.body.date,
					});
					student
						.save()
						.then((result) => {
							res.send({
								msg: 'student added',
								result,
							});
						})
						.catch((err) => err);
				});
			}
		})
		.catch();
});

router.route('/studentlogin').post((req, res) => {
	Student.find({
		index_number: req.body.index_number,
	})
		.exec()
		.then((user) => {
			if (user.length < 1) {
				res.status(401).json({
					msg: 'Data  not found',
				});
			} else {
				bcrypt.compare(req.body.password, user[0].password, function (
					err,
					resu
				) {
					if (resu) {
						let token = jwt.sign(
							{
								name: user[0].index_number,
							},
							process.env.JWT_KEY,
							{
								expiresIn: '1h',
							}
						);

						res.status(201).json({
							token: token,
							fullname: `${user[0].f_name} ${user[0].l_name}`,
						});
					} else {
						res.status(401).json({
							msg: 'Did not match',
						});
					}
				});
			}
		})
		.catch((err) => err);
});

module.exports = router;
