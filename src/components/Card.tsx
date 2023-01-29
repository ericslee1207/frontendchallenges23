import React from "react";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addCourseToCart, removeCourseFromCart } from "../actions/index";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import "./Card.css";

const Card = (props: any) => {
  const dispatch = useDispatch();
  const coursesCart = useSelector((state: any) => state.coursesCart);
  const allCourses = useSelector((state: any) => state.allCourses);
  let disabled = coursesCart.length >= 7 ? true : false;
  const key = props.c.dept + "-" + props.c.number;
  const detailedCourse = allCourses.filter((c: any) => c.id === key)[0];
  const [selected, select] = React.useState(false);
  const [added, addToCart] = React.useState(
    coursesCart.includes(props.c) ? true : false
  );
  const handleAddToCart = () => {
    if (added) {
      dispatch(removeCourseFromCart(props.c));
    } else {
      dispatch(addCourseToCart(props.c));
    }
    addToCart(!added);
  };
  let prereqs = "None";
  if (props.c.prereqs !== undefined) {
    prereqs = "";
    for (let i = 0; i < props.c.prereqs.length; i++) {
      if (i === props.c.prereqs.length - 1) {
        prereqs += props.c.prereqs[i];
      } else {
        prereqs += props.c.prereqs[i] + ", ";
      }
    }
  }
  let backgroundColor = "#b7fdda";
  if ((props.c.number + "")[0] === "1") {
    backgroundColor = "#b7fdda";
  } else if ((props.c.number + "")[0] === "1") {
    backgroundColor = "#e6c8fe";
  } else if ((props.c.number + "")[0] === "2") {
    backgroundColor = "#ffd0bf";
  } else if ((props.c.number + "")[0] === "3") {
    backgroundColor = "#ffb8d2";
  } else {
    backgroundColor = "#cea4e4";
  }
  return (
    <>
      <Grid>
        <div className="cardcontainer">
          <div
            key={`${props.c.dept}-${props.c.number}`}
            style={{
              opacity: selected ? 1 : 0.7,
              transition: "opacity 400ms ease",
            }}
            className="mainbody"
          >
            <div
              style={{
                backgroundColor: backgroundColor,
              }}
              className="cardtophalf"
            >
              <div className="namecontainer">
                <p style={{ fontSize: "25px", fontWeight: "bold" }}>
                  {props.c.dept + " " + props.c.number}
                </p>
              </div>
            </div>
            <div className="bottomhalfcard">
              <h3 style={{ fontWeight: "bold" }}>{props.c.title}</h3>
              <div style={{ display: "flex" }}>
                <p className="title">Prereqs: </p>
                <p className="title">{prereqs}</p>
              </div>
              {detailedCourse !== undefined ? (
                <>
                  <div style={{ display: "flex" }}>
                    <p className="title">Difficulty: </p>
                    <p className="title">{detailedCourse.difficulty}</p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <p className="title">Quality: </p>
                    <p className="title">{detailedCourse.course_quality}</p>
                  </div>
                </>
              ) : (
                <></>
              )}
              {/* <p style={{ marginRight: "5px", fontSize: "14px" }}>
              Description:{" "}
            </p> */}
              {selected ? (
                <div style={{ overflowY: "auto", maxHeight: "200px" }}>
                  <p style={{ fontSize: "14px" }}>{props.c.description}</p>
                </div>
              ) : (
                <></>
              )}
              <button
                className="expandbutton"
                onClick={() => select(!selected)}
              >
                {selected ? <ExpandLessIcon /> : <ExpandMoreIcon />}
              </button>
            </div>
          </div>

          <button
            disabled={added ? false : disabled}
            className="button"
            style={{ backgroundColor: added ? "lightpink" : "lightgreen" }}
            onClick={handleAddToCart}
          >
            <h3>{added ? "Remove from Cart" : "Add to Cart"}</h3>
          </button>
        </div>
      </Grid>
    </>
  );
};

export default Card;
