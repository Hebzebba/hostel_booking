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
export const postStart = ()=>({
  type:actionTpes.POST_DATA_START,
});

export const postSucces = ()=>({
  type:actionTpes.POST_DATA_SUCCESS,
});

export const postFail = ()=>({
  type:actionTpes.POST_DATA_FAIL,
});

export const addData = (
  hostel_name, 
  price,
   room_capacity,
    description,
     distance,
     hostel_type,
       hostel_image, 
      map_area
      )=>dispatch=>{
  dispatch(postStart());

  axios.post("http://localhost:5000/add",
  {
    hostel_name: hostel_name,
    price:price,
    room_capacity:room_capacity,
    description:description,
    distance : distance,
    hostel_type:hostel_image,
    hostel_image:hostel_image,
    map_area:map_area
  }
  )
  .then(result=>dispatch(postSucces()))
  .catch(err=>dispatch(postFail()))
}


// Authentication

export const authStart = ()=>({
  type:actionTpes.AUTH_START,
});

export const authSuccess = (payload)=>({
  type:actionTpes.AUTH_SUCCESS,
  payload
});

export const authFail = ()=>({
  type:actionTpes.AUTH_FAIL,
});


export const studentLogin = (index_number , password)=> dispatch=>{
dispatch(authStart());
axios.post("http://localhost:5000/studentlogin",{index_number:index_number ,password:password})
.then(res=>dispatch(authSuccess(res.data)))
.catch(err=>dispatch(authFail))
};