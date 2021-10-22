import { createStore } from "redux";
import countryReducer from "./reducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";

export const store = createStore(countryReducer, applyMiddleware(thunk))