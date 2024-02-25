import React, { useContext } from 'react';
import { PRODUCTS } from '../../products';
import { MerchContext } from '../../context/merchContextProvider';
import { CartItem } from './cartItem';
import { Link } from 'react-router-dom';

import "./cart.css";

export default () => {
    const {cartItems, getTotalCartAmount} = useContext(MerchContext);
    const totalAmount = getTotalCartAmount();

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
        {totalAmount > 0 ? 
        <div className='checkout'>
            <p>Subtotal: £{totalAmount}</p>
            <button><Link to='/merch' className='checkoutlink'>Continue Shopping</Link></button>
            <button>Checkout</button>
        </div>
: <h1>Your Cart is Empty</h1>}
    </div>
    
)};