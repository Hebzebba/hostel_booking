import * as actionTypes from "../actions/actionTypes";

const initialState = {
  datalist: [],
  loading: false,
  error: false,
};
export const fetchDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_DATA_SUCCESS:
      return { ...state, loading: false, datalist: action.payload };
    case actionTypes.FETCH_DATA_FAIL:
      return { ...state, error: true };
    default:
      return state;
  }
};


export const fetchBookDataReducer = (state = {bookData:[],loading:false, error:false}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BOOK_DATA_START:
      return { ...state, loading: true };
    case actionTypes.FETCH_BOOK_DATA_SUCCESS:
      return { ...state, loading: false, bookData: action.payload };
    case actionTypes.FETCH_BOOK_DATA_FAIL:
      return { ...state, error: true };
    default:
      return state;
  }
};

export const fetchDataDetailReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.FETCH_DATA_DETAILS:
      return (state = action.payload);
    default:
      return state;
  }
};

export const postDataReducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.POST_DATA_START:
      return ({...state,loading:true});
    case actionTypes.POST_DATA_SUCCESS:
       return ({...state,loading:false});
    case actionTypes.POST_DATA_FAIL:
       return ({...state,loading:false,err:true});
    default:
      return state;
  }
};
