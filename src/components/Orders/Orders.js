import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";

import ReviewItems from "../ReviewItems/ReviewItems";
import "./Order.css";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
  // for removing cart:
  const removeHandleClick = (product) => {
    //  jeita remove korbo oita baade baki gula ke ami filter kore ekti new array te rekehe setCart function e pass kore dibo:
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    // removing also from localStorage:
    removeFromDb(product.id);
  };
  return (
    <div>
      <div className="shop-container">
        <div className="review-items-container">
          {cart.map((product) => (
            <ReviewItems
              key={product.id}
              product={product}
              removeHandleClick={removeHandleClick}
            ></ReviewItems>
          ))}
        </div>

        <div className="cart-container">
          <Cart cart={cart}>
            <Link to="/inventory">
              <button>Proceed Checkout</button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Orders;
