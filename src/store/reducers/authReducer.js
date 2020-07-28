import * as actionTypes from "../actions/actionTypes";

const initialState = {
  token: "",
  loading: false,
  error: false,
};
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return {
        ...state, loading: true
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state, loading: false, token: action.payload
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state, error: true
      };
    default:
      return state;
  }
};