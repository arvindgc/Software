import { useState } from "react";
import ShoppingItem from "./ShoppingItem";
import "./ShoppingCart.css";
export default function ShoppingCart() {
  let [cartData, setCartData] = useState([]);
  let item = (currData) => {
    let UpdatedcartData = [...cartData, currData];
    setCartData(UpdatedcartData);
  };
  let removeElement = (idx) => {
    let updatedData = cartData.filter((ele) => {
      return idx !== cartData.indexOf(ele);
    });
    setCartData(updatedData);
  };
  return (
    <div>
      <ShoppingItem myitem={item} />

      <div className="mycontainer">
        <h1 className="mycart">MY CART</h1>
        <div className="cardContainer">
          {cartData
            .filter((el) => {
              return el.product !== "" && el.quantity !== 0;
            })
            .map((ele, idx) => {
              return (
                <div className="itemCard" key={idx}>
                  <button
                    type="button"
                    onClick={() => removeElement(idx)}
                    className="btn btn-info custombtn"
                  >
                    X
                  </button>
                  <div className="myproduct">{ele.product.toUpperCase()}</div>
                  <div className="myQuantity">{ele.quantity}</div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
