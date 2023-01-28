import React from "react";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addCourseToCart, removeCourseFromCart } from "../actions/index";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

const Card = (props: any) => {
  const dispatch = useDispatch();
  const coursesCart = useSelector((state: any) => state.coursesCart);
  let disabled = coursesCart.length >= 7 ? true : false;
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
  if (props.c.prereqs != undefined) {
    prereqs = "";
    for (let i = 0; i < props.c.prereqs.length; i++) {
      if (i == props.c.prereqs.length - 1) {
        prereqs += props.c.prereqs[i];
      } else {
        prereqs += props.c.prereqs[i] + ", ";
      }
    }
  }
  let backgroundColor = "#b7fdda";
  if ((props.c.number + "")[0] == "1") {
    backgroundColor = "#b7fdda";
  } else if ((props.c.number + "")[0] == "1") {
    backgroundColor = "#e6c8fe";
  } else if ((props.c.number + "")[0] == "2") {
    backgroundColor = "#ffd0bf";
  } else if ((props.c.number + "")[0] == "3") {
    backgroundColor = "#ffb8d2";
  } else {
    backgroundColor = "#cea4e4";
  }
  return (
    <>
      <Grid>
        <div
          key={`${props.c.dept}-${props.c.number}`}
          style={{
            opacity: selected ? 1 : 0.7,
            transition: "opacity 400ms ease",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            width: "300px",
            marginTop: "30px",
            margin: "20px",
            minHeight: "400px",
            boxSizing: "border-box",
            borderRadius: "30px",
            backgroundColor: "white",
            boxShadow: "0.1px 0.1px 10px lightgrey",
          }}
        >
          <div
            style={{
              width: "298px",
              height: "175px",
              boxSizing: "border-box",
              borderTopRightRadius: "30px",
              borderTopLeftRadius: "30px",
              backgroundColor: backgroundColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                borderTopRightRadius: "20px",
                borderBottomLeftRadius: "20px",
                height: "70px",
                width: "170px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
              }}
            >
              <p style={{ fontSize: "25px", fontWeight: "bold" }}>
                {props.c.dept + " " + props.c.number}
              </p>
            </div>
          </div>
          <div
            style={{
              width: "298px",
              minHeight: "140px",
              boxSizing: "border-box",
              borderBottomRightRadius: "30px",
              borderBottomLeftRadius: "30px",
              backgroundColor: "white",
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingBottom: "70px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h3 style={{ fontWeight: "bold" }}>{props.c.title}</h3>
            <div style={{ display: "flex" }}>
              <p style={{ marginRight: "5px", fontSize: "14px" }}>Prereqs: </p>
              <p style={{ fontSize: "14px" }}>{prereqs}</p>
            </div>
            {/* <p style={{ marginRight: "5px", fontSize: "14px" }}>
              Description:{" "}
            </p> */}
            {selected ? (
              <div>
                <p style={{ fontSize: "12px" }}>{props.c.description}</p>
              </div>
            ) : (
              <></>
            )}
            <button
              style={{
                borderRadius: "30px",
                height: "40px",
                width: "98%",
                alignSelf: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "white",
                bottom: "5px",
                position: "absolute",
                border: "0px",
              }}
              onClick={() => select(!selected)}
            >
              {selected ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </button>
          </div>
        </div>

        <button
          disabled={added ? false : disabled}
          style={{
            border: "0px",
            width: "300px",
            padding: "5px",
            marginTop: "5px",
            marginRight: "20px",
            marginLeft: "20px",
            marginBottom: "30px",
            height: "60px",
            boxSizing: "border-box",
            borderRadius: "30px",
            backgroundColor: added ? "lightpink" : "lightgreen",
            boxShadow: "0.1px 0.1px 10px lightgrey",
          }}
          onClick={handleAddToCart}
        >
          <p>{added ? "Remove from Cart" : "Add to Cart"}</p>
        </button>
      </Grid>
    </>
  );
};

export default Card;
