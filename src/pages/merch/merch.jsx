import React from 'react';
import cart from '../../assets/icons/cart.png';
import search from '../../assets/icons/search.png';


export default () => (
    <div className='header'>
        <h1>The Band Shop</h1>
        <div className='cart'>
        <img src={cart} />
        <img src={search} />
        </div>
    </div>    
);