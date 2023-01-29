import BackpackOutlinedIcon from "@mui/icons-material/BackpackOutlined";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const coursesCart = useSelector((state: any) => state.coursesCart);
  const size = coursesCart.length;
  const navigate = useNavigate();
  return (
    <div
      style={{
        padding: "0 1rem",
        boxShadow: "0.1px 0.1px 10px lightgrey",
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: 0,
        backgroundColor: "white",
        zIndex: 99,
      }}
    >
      <h2 style={{ marginLeft: "14%" }}>Penn Course Cart</h2>
      <button
        style={{
          position: "absolute",
          right: "25%",
          flexDirection: "row",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          border: "0px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        <h3 style={{ marginRight: "10px" }}>All Courses</h3>
      </button>
      <button
        style={{
          position: "absolute",
          right: "17%",
          flexDirection: "row",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          border: "0px",
          cursor: "pointer",
        }}
        onClick={() => navigate("cart")}
      >
        <h3 style={{ marginRight: "10px" }}>My Cart</h3>
        <BackpackOutlinedIcon fontSize="large" />
      </button>
      <div
        style={{
          width: "20px",
          height: "20px",
          position: "absolute",
          right: "17%",
          top: "18%",
          borderRadius: "10px",
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ color: "white", fontSize: "13px" }}>{size}</p>
      </div>
    </div>
  );
};

export default Nav;
