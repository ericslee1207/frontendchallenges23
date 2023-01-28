import coursesCartReducer from "./coursesCartReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  coursesCart: coursesCartReducer,
});

export default allReducers;
