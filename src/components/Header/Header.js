import React from 'react';
import logo from "../../images/Logo.svg"
import "./Header.css"

const Header = () => {
    return (
        <nav className = "header">
         <div>

      
           <img src={logo} alt="" />
          </div>

          <div>
          <ul>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/inventory">Inventory</a></li>
          <li><a href="/about">About</a></li>
       
       </ul>
       </div>
             
            
        </nav>
    );
};

export default Header;