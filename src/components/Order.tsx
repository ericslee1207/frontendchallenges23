import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch } from "react-redux";
import { removeCourseFromCart } from "../actions";

const Order = (props: any) => {
  const dispatch = useDispatch();
  let prereqs = "None";
  if (props.order.prereqs !== undefined) {
    prereqs = "";
    for (let i = 0; i < props.order.prereqs.length; i++) {
      if ((i = props.order.prereqs.length - 1)) {
        prereqs += props.order.prereqs[i];
      } else {
        prereqs += props.order.prereqs[i] + ", ";
      }
    }
  }
  let backgroundColor = "#b7fdda";
  if ((props.order.number + "")[0] === "1") {
    backgroundColor = "#b7fdda";
  } else if ((props.order.number + "")[0] === "1") {
    backgroundColor = "#e6c8fe";
  } else if ((props.order.number + "")[0] === "2") {
    backgroundColor = "#ffd0bf";
  } else if ((props.order.number + "")[0] === "3") {
    backgroundColor = "#ffb8d2";
  } else {
    backgroundColor = "#cea4e4";
  }
  return (
    <div
      style={{
        border: "1px solid rgba(0, 0, 0, 0.1)",
        width: "95%",
        marginRight: "20px",
        marginTop: "20px",
        height: "180px",
        boxSizing: "border-box",
        borderRadius: "30px",
        backgroundColor: "white",
        boxShadow: "0.1px 0.1px 10px lightgrey",
        display: "flex",
        flexDirection: "row",
        flex: 1,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 1 / 3,
          backgroundColor: backgroundColor,
          borderTopLeftRadius: "30px",
          borderBottomLeftRadius: "30px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            borderTopRightRadius: "20px",
            borderBottomLeftRadius: "20px",
            height: "50px",
            width: "150px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "white",
          }}
        >
          <p style={{ fontSize: "20px", fontWeight: "bold" }}>
            {props.order.dept + " " + props.order.number}
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 2 / 3,
          borderTopRightRadius: "30px",
          borderBottomRightRadius: "30px",
          paddingLeft: "15px",
          paddingRight: "15px",
        }}
      >
        <h3 style={{ fontWeight: "bold" }}>{props.order.title}</h3>
        <div style={{ display: "flex" }}>
          <p style={{ marginRight: "5px", fontSize: "14px" }}>Prereqs: </p>
          <p style={{ fontSize: "14px" }}>{prereqs}</p>
        </div>
      </div>
      <button
        style={{
          height: "30px",
          width: "30px",
          backgroundColor: "red",
          borderRadius: "25px",
          marginTop: "-8px",
          marginRight: "-8px",
          border: "0px",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
        onClick={() => dispatch(removeCourseFromCart(props.order))}
      >
        <ClearIcon fontSize="small" htmlColor="white" />
      </button>
    </div>
  );
};

export default Order;
