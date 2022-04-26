import React, { useEffect, useState } from 'react';
import "./Shop.css";
import Product from "../Product/Product"

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
              <h4>This is the order container</h4>
              <p>Selected items : {cart.length}</p>
          </div>
        </div>
     
    );
};

export default Shop;