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

// Fetch booked data
export const fetchBookedData = () => (dispatch) => {
	
	axios
		.get('http://localhost:5000/getbookusers')
		.then((res) => {
			dispatch({
				type: actionTpes.FETCH_BOOK_DATA_SUCCESS,
				payload:res.data
			});
		})
		.catch((err) => {
			dispatch(error(err));
		});
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
	map_area,
	account_number,
	bank_name,
	longitude,
	latitude,


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
			account_number:account_number,
			bank_name:bank_name,
			longitude:longitude,
			latitude:latitude
		})
		.then((res) => dispatch(postSucces()))
		.catch((err) => dispatch(postFail()));
};

// Book Data
const initialState = {
    full_name: "",
    gender: "",
    level: "",
    room_type: "",
    room_number: "",
    bed: "",
    phone_number: "",
    date:""
    
}
export const bookStart = ( full_name,gender, level,room_type,room_number,bed,phone_number,date) => ({
	type: actionTpes.BOOK_DATA_START,
	payload: {
		full_name,gender,level,room_type,room_number,bed,phone_number,date
	}
});

export const bookSucces = (payload) => ({
	type: actionTpes.BOOK_DATA_SUCCESS,
	payload
});

export const bookFail = (payload) => ({
	type: actionTpes.BOOK_DATA_FAIL,
	payload
});

export const booking = (
	index_number,
	full_name,
	hostel_name,
	gender,
	level,
	room_type,
	room_number,
	bed,
	hostel_type,
	tel_number,
	date
) => (dispatch) => {
	
	axios
		.post('http://localhost:5000/booking', {
			index_number: index_number,
			full_name: full_name,
			hostel_name: hostel_name,
			gender: gender,
			level: level,
			room_type: room_type,
			room_number: room_number,
			bed: bed,
			hostel_type: hostel_type,
			tel_number: tel_number,
			date: date,
		})
		.then(res => { 	
			if (res.data.msg === "User already exist") {
				dispatch(bookFail(res.data.msg));
			 }
		}
		)
		.catch(err => {
			dispatch(bookFail(err))
		} 
		);
};
// delete data
export const deleteHostel = (id) => {
	axios.post(`http://localhost:5000/delete`,{id:id})
		.then(re => re)
		.catch(er => er)
 }

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
			localStorage.setItem('indexNumber', res.data.index_number);
			localStorage.setItem('gender', res.data.gender);
			localStorage.setItem('level', res.data.level);
		})
		.catch((err) => dispatch(authFail()));
};


export const adminLogin = (email, password) => (dispatch) => {
	axios
		.post('http://localhost:5000/adminlogin', {
			email: email,
			password: password,
		})
		.then((res) => {
			console.log(res)
		})
		.catch((err) => dispatch(authFail()));
};