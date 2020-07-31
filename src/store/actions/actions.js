import * as actionTpes from "./actionTypes";
import axios from "axios";

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
    .get("http://localhost:5000/datalist")
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
  'Content-Type': "multipart/form-data; charset=utf-8; boundary=" + Math.random().toString().substr(2)
};

// let headers = {
//   'Content-Type': 'multipart/form-data; charset=utf-8;'
// };

let formData = new FormData();


let fd = new FormData();
export const addData = (
  hostel_name,
  price,
  one_in_identity,
  four_in_identity,
  bed,
  description,
  distance,
  hostel_type,
  hostel_image,
  map_area
) => dispatch => {
  dispatch(postStart());

  axios.post("http://localhost:5000/add", {
      hostel_name: hostel_name,
      price: price,
      one_in_identity: one_in_identity,
      four_in_identity: four_in_identity,
      bed: bed,
      description: description,
      distance: distance,
      hostel_type: hostel_type,
      hostel_image: formData.append('hostel_image', hostel_image),
      map_area: map_area
    }, {
      headers: headers
    })
    .then(result => dispatch(postSucces()))
    .catch(err => dispatch(postFail()))
}


// Authentication

export const authStart = () => ({
  type: actionTpes.AUTH_START,
});

export const authSuccess = (payload) => ({
  type: actionTpes.AUTH_SUCCESS,
  payload
});

export const authFail = () => ({
  type: actionTpes.AUTH_FAIL,
});


export const studentLogin = (index_number, password) => dispatch => {
  dispatch(authStart());
  axios.post("http://localhost:5000/studentlogin", {
      index_number: index_number,
      password: password
    })
    .then(res => {
      dispatch(authSuccess(res.data));
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', res.data.fullname)
    })
    .catch(err => dispatch(authFail))
};