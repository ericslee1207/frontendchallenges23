import { useDispatch, useSelector } from "react-redux";
import Order from "./Order";
import ComputerIcon from "@mui/icons-material/Computer";
import { useNavigate, createSearchParams } from "react-router-dom";
import { clearCart } from "../actions";

const Cart = () => {
  const coursesCart = useSelector((state: any) => state.coursesCart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(clearCart());
    navigate({
      pathname: "/receipts",
      search: createSearchParams({
        obj: coursesCart.map((c: any) => JSON.stringify(c)),
      }).toString(),
    });
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        boxSizing: "border-box",
        paddingLeft: "15%",
        paddingRight: "15%",
        // boxShadow: "0.1px 0.1px 10px lightgrey",
      }}
    >
      <h3>Your Course Cart</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flex: 2,
          width: "100%",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1.3,
            height: "550px",
            width: "100%",
            overflowY: "auto",
          }}
        >
          {coursesCart.length == 0 ? (
            <p>Your cart is currently empty!</p>
          ) : (
            <div style={{ height: "100%" }}>
              {coursesCart.map((c: any) => (
                <Order order={c} />
              ))}
            </div>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 0.7,
            width: "100%",
            alignItems: "center",
            marginTop: "20px",
            marginLeft: "20px",
          }}
        >
          <div
            style={{
              boxShadow: "0.1px 0.1px 10px lightgrey",
              minHeight: "300px",
              width: "90%",
              borderRadius: "25px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <h3>Your Cart Items</h3>

            {coursesCart.length == 0 ? (
              <div
                style={{
                  width: "100%",
                  height: "280px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <ComputerIcon style={{ width: "60px", height: "60px" }} />
                <p>Add more courses!</p>
              </div>
            ) : (
              <div style={{ alignSelf: "flex-start" }}>
                {coursesCart.map((c: any) => (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "space-between",
                      flexDirection: "row",
                    }}
                  >
                    <p>{c.dept + " " + c.number}</p>
                    <p>1 C.U.</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          {coursesCart.length > 0 ? (
            <button
              style={{
                border: "0px",
                width: "300px",
                padding: "5px",
                marginRight: "20px",
                marginLeft: "20px",
                marginTop: "30px",
                height: "60px",
                boxSizing: "border-box",
                borderRadius: "30px",
                backgroundColor: "lightgreen",
                boxShadow: "0.1px 0.1px 10px lightgrey",
              }}
              onClick={handleSubmit}
            >
              <p>Proceed to Checkout</p>
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
