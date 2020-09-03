import * as actionTypes from "../actions/actionTypes";


const initialState = {
    full_name: "",
    gender: "",
    level: "",
    room_type: "",
    room_number: "",
    bed: "",
    phone_number: "",
    date: "",
    bookFail: undefined,
    bookSucces:undefined,
}


export const BookReducer = (state = initialState, action) => {
    switch (action.type) { 
        case actionTypes.BOOK_DATA_START:
            return { ...state, ...action.payload }
        case actionTypes.BOOK_DATA_SUCCESS: 
            return{...state,bookSucces:action.payload}
        case actionTypes.BOOK_DATA_FAIL:
            return {...state,bookFail:action.payload}
        default:
            return state
    }
 }