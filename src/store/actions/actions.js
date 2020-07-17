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
