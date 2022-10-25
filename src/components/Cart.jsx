import { useContext } from "react";
import { ShopContext } from "../context.js";

function Cart() {
  const { order, handleBasketShow = Function.prototype } =
    useContext(ShopContext);
  const quantity = order.length;

  return (
    <div className="cart blue darken-4 white-text" onClick={handleBasketShow}>
      <i className="material-icons">Shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}

export { Cart };