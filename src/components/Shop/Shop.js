import React, { useEffect, useState } from 'react';
import "./Shop.css";
import Product from "../Product/Product"
import Cart from '../Cart/Cart';

const Shop = () => {

    // loading the products info:
    const [products,setProducts] = useState([]);

    useEffect(()=>{

         fetch("products.json")
         .then(res=>res.json())
         .then(data=>setProducts(data));


    },[])

    // for cart using  state:
    const [cart,setCart] = useState([]);


    // for product component's button handler:
    const handleAddToCart = (product)=>{
      
        const newCart = [...cart,product];
        setCart(newCart);

        console.log(newCart);

    }

   
    return (
        <div className = "shop-container">
          <div className = "product-container">
               {
                   products.map(product=><Product product = {product} key = {product.id} handleAddToCart = {handleAddToCart}></Product>)
               }
          </div>
          <div>
            <Cart cart = {cart}></Cart>
          </div>
        </div>
     
    );
};

export default Shop;