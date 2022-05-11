// import React, { useEffect, useState } from 'react';
// import "./Shop.css";
// import Product from "../Product/Product"
// import Cart from '../Cart/Cart';

// const Shop = () => {

//     // loading the products info:
//     const [products,setProducts] = useState([]);

//     useEffect(()=>{

//          fetch("products.json")
//          .then(res=>res.json())
//          .then(data=>setProducts(data));

//     },[])

//     // for cart using  state:
//     const [cart,setCart] = useState([]);

//     // for product component's button handler:
//     const handleAddToCart = (product)=>{

//         const newCart = [...cart,product];
//         setCart(newCart);

//         console.log(newCart);

//     }

//     return (
//         <div className = "shop-container">
//           <div className = "product-container">
//                {
//                    products.map(product=><Product product = {product} key = {product.id} handleAddToCart = {handleAddToCart}></Product>)
//                }
//           </div>
//           <div>
//             <Cart cart = {cart}></Cart>
//           </div>
//         </div>

//     );
// };

// export default Shop;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  // using custom hook:
  const [products, setProducts] = useProducts();
  // custom hook end:
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products?.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    console.log(selectedProduct);
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }

    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products?.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <Link to="/orders">
            <button>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
