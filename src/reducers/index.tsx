import coursesCartReducer from "./coursesCartReducer";
import { combineReducers } from "redux";
import coursesReducer from "./coursesReducer";

const allReducers = combineReducers({
  coursesCart: coursesCartReducer,
  allCourses: coursesReducer,
});

export default allReducers;
