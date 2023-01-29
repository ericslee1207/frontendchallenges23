import { useDispatch, useSelector } from "react-redux";
import Order from "./Order";
import ComputerIcon from "@mui/icons-material/Computer";
import { useNavigate, createSearchParams } from "react-router-dom";
import { clearCart } from "../actions";
import "./Cart.css";

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
    <div className="cartcontainer">
      <h3>Your Course Cart</h3>
      <div className="carthlayout">
        <div className="cartv1layout">
          {coursesCart.length === 0 ? (
            <p>Your cart is currently empty!</p>
          ) : (
            <div style={{ height: "100%" }}>
              {coursesCart.map((c: any) => (
                <div key={c.dept + "-" + c.number}>
                  <Order order={c} />
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="cartv2layout">
          <div className="cartcard">
            <h3>Your Cart Items</h3>

            {coursesCart.length === 0 ? (
              <div className="cartitem">
                <ComputerIcon style={{ width: "60px", height: "60px" }} />
                <p>Add more courses!</p>
              </div>
            ) : (
              <div style={{ alignSelf: "flex-start" }}>
                {coursesCart.map((c: any) => (
                  <div className="cartcheckout">
                    <p>{c.dept + " " + c.number}</p>
                    <p>1 C.U.</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          {coursesCart.length > 0 ? (
            <button className="cartbutton" onClick={handleSubmit}>
              <h3>Proceed to Checkout</h3>
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
