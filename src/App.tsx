import "./App.css";

import Nav from "./components/Nav";
import Courses from "./components/Courses";
import Cart from "./components/Cart";
import { Provider, useDispatch } from "react-redux";
import { legacy_createStore as createStore } from "redux";
import allReducers from "./reducers";
import { Routes, Route } from "react-router-dom";
import Receipts from "./components/Receipts";
import { getCourseDetails } from "./api/courseAPI";
import { useEffect } from "react";
import { loadCourse } from "./actions";
import courses from "./data/courses.json";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getAllCourses = async () => {
      for (let i = 0; i < courses.length; i++) {
        const element = courses[i];
        let key = element.dept + "-" + element.number;
        try {
          await getCourseDetails("2022A", key).then((r) => {
            dispatch(loadCourse(r));
          });
        } catch {
          console.log("error");
        }
      }
      // getCourses("2022A").then(async (res) => {
      //   for (let i = 0; i < 100; i++) {
      //     const element = res[i];
      //     getCourseDetails("2022A", element.id).then((r) =>
      //       dispatch(loadCourse(r))
      //     );
      //   }
      // });
    };
    getAllCourses();
  });
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Courses />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/receipts" element={<Receipts />} />
      </Routes>
    </>
  );
}

export default App;
