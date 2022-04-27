import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
               <h4>This is the order container</h4>
              <p>Selected items : {cart.length}</p>
        </div>
    );
};

export default Cart;