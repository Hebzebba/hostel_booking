import * as actionTpes from './actionTypes';
import axios from 'axios';

export const start = () => {
	return {
		type: actionTpes.FETCH_DATA_START,
	};
};

export const success = (payload) => {
	return {
		type: actionTpes.FETCH_DATA_SUCCESS,
		payload,
	};
};

export const error = (payload) => {
	return {
		type: actionTpes.FETCH_DATA_FAIL,
		payload,
	};
};

export const detail = (payload) => {
	return {
		type: actionTpes.FETCH_DATA_DETAILS,
		payload,
	};
};

export const fetchData = () => (dispatch) => {
	dispatch(start());
	axios
		.get('http://localhost:5000/datalist')
		.then((res) => {
			dispatch(success(res.data));
		})
		.catch((err) => {
			dispatch(error(err));
		});
};

export const fetchDataDetail = (id) => (dispatch) => {
	dispatch(start());
	axios
		.get(`http://localhost:5000/details/${id}`)
		.then((result) => dispatch(detail(result.data)))
		.catch((err) => dispatch(error(err)));
};

// Post data
export const postStart = () => ({
	type: actionTpes.POST_DATA_START,
});

export const postSucces = () => ({
	type: actionTpes.POST_DATA_SUCCESS,
});

export const postFail = () => ({
	type: actionTpes.POST_DATA_FAIL,
});

let headers = {
	'Content-Type': 'multipart/form-data;',
};

export const addData = (
	hostel_name,
	price,
	one_in_identity,
	four_in_identity,
	description,
	distance,
	merchant_id,
	hostel_type,
	hostel_image,
	map_area
) => (dispatch) => {
	dispatch(postStart());
	axios
		.post('http://localhost:5000/add/', {
			hostel_name: hostel_name,
			price: price,
			one_in_identity: one_in_identity,
			four_in_identity: four_in_identity,
			description: description,
			distance: distance,
			merchant_id: merchant_id,
			hostel_type: hostel_type,
			hostel_image: hostel_image,
			map_area: map_area,
		})
		.then((res) => dispatch(postSucces()))
		.catch((err) => dispatch(postFail()));
};

// Book Data

export const bookStart = () => ({
	type: actionTpes.BOOK_DATA_START,
});

export const bookSucces = () => ({
	type: actionTpes.BOOK_DATA_SUCCESS,
});

export const bookFail = () => ({
	type: actionTpes.BOOK_DATA_FAIL,
});

export const booking = (
	full_name,
	gender,
	level,
	room_type,
	room_number,
	bed,
	hostel_type,
	tel_number,
	date
) => (dispatch) => {
	dispatch(bookStart());
	axios
		.post('http://localhost:5000/booking', {
			full_name: full_name,
			gender: gender,
			level: level,
			room_type: room_type,
			room_code: room_number,
			bed: bed,
			hostel_type: hostel_type,
			tel_number: tel_number,
			date: date,
		})
		.then(dispatch(bookSucces()))
		.catch(dispatch(bookFail()));
};

// Authentication

export const authStart = () => ({
	type: actionTpes.AUTH_START,
});

export const authSuccess = (payload) => ({
	type: actionTpes.AUTH_SUCCESS,
	payload,
});

export const authFail = () => ({
	type: actionTpes.AUTH_FAIL,
});

export const studentLogin = (index_number, password) => (dispatch) => {
	dispatch(authStart());
	axios
		.post('http://localhost:5000/studentlogin', {
			index_number: index_number,
			password: password,
		})
		.then((res) => {
			dispatch(authSuccess(res.data));
			localStorage.setItem('token', res.data.token);
			localStorage.setItem('user', res.data.fullname);
		})
		.catch((err) => dispatch(authFail));
};
