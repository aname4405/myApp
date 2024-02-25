import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { MerchContext } from '../../context/merchContextProvider';
import { CartItem } from './cartItem';

import "./cart.css";

export default () => {
    const {cartItems} = useContext(MerchContext);
    return (
    <div className="cartItems">
        <div>
            <h1>Your Cart Items</h1>
        </div>
        <div className="cartItems">
            {PRODUCTS.map((product) => {
                if (cartItems[product.id] !== 0) {
                    return <CartItem data={product} />
                }
            })}
        </div>
    </div>
    
)};