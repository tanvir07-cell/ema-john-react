import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import "./Product.css"

const Product = (props) => {
    const {product,handleAddToCart} = props;
    const{img,name,price,seller,ratings} = product;
//    const {img,name,price,seller,ratings} = props.product;
  
    return (
        <div className = "product">
            <div className = "product-description">
             <img src={img} alt="" />
             <p className = "product-name">{name}</p>
             <p className = "product-price">Price : ${price}</p>
             <p className = "product-company">Manufacturer : {seller}</p>
             <p className = "product-ratings">Ratings : {ratings} star</p>
            
             </div>

             <button className = "btn-cart" onClick = {()=>handleAddToCart(product)}>
             <p>Add to Cart</p>
             <FontAwesomeIcon icon={faShoppingCart} />
             </button>

            
        </div>
    );
};

export default Product;