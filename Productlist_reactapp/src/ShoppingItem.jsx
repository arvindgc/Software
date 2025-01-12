import { useState } from "react";
import "./ShoppingItem.css";
export default function ShoppingItem({ myitem }) {
  let [formdata, setformdata] = useState({ product: "", quantity: 0 });

  let collectdata = (evt) => {
    setformdata((formdata) => {
      return { ...formdata, [evt.target.name]: evt.target.value };
    });
  };

  let collectquantity = (evt) => {
    setformdata((formdata) => {
      return { ...formdata, [evt.target.name]: evt.target.value };
    });
  };
  let holdData = (evt) => {
    evt.preventDefault();
    const currData = formdata;

    myitem(currData);
    setformdata({ product: "", quantity: 0 });
  };
  return (
    <form className="row g-3 customfrm">
      <label htmlFor="product" className="form-label ">
        PRODUCT
      </label>
      <input
        type="text"
        placeholder="product name"
        name="product"
        id="product"
        value={formdata.product}
        onChange={collectdata}
        className="form-control"
      ></input>
      <label htmlFor="quantity" className="form-label">
        QUANTITY
      </label>
      <input
        type="number"
        placeholder="quantity"
        name="quantity"
        id="quantity"
        value={formdata.quantity}
        className="form-control"
        onChange={collectquantity}
      ></input>
      <div className="mybtn">
        <button onClick={holdData} className="btn btn-primary customclr">
          Add Item
        </button>
      </div>
    </form>
  );
}
