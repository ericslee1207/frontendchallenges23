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
        width: "100%",
        padding: "0 1rem",
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        position: "relative",
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
