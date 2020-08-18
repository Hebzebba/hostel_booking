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
    bookFail:false
}


export const BookReducer = (state = initialState, action) => {
    switch (action.type) { 
        case actionTypes.BOOK_DATA_START:
            return { ...state, ...action.payload }
        case actionTypes.BOOK_DATA_FAIL:
            return {...state,bookFail:true}
        default:
            return state
    }
 }