import { createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  fetcDataReducer,
  fetcDataDetailReducer,
} from "./reducers/fetchDataReducer";

const initialState = {};
const rootReducer = combineReducers({
  data: fetcDataReducer,
  detailsData: fetcDataDetailReducer,
});
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
export const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
