import React from 'react';
import { Link } from 'react-router-dom';
import cart from '../../assets/icons/cart.png';
import search from '../../assets/icons/search.png';
import { PRODUCTS } from '../../products';
import Product from './product'; 
import './merch.css';


export default () => (
    <div className='shop'>
        <div className='header'>
        <h1>The Band Shop</h1>
        </div>
        <div className='merchlink'>
        <Link to="/cart"><img src={cart} className='cartlink' /></Link>
        <img src={search} className='cartlink'/>
        </div>
        <br />
        <div className='products'> 
        {PRODUCTS.map((product) => (
            <Product data={product}/>
        ))}
        </div>
    </div>    
);

//need to sort out link from image of cart to cart page.
//need to sort function for search and link to this when clicked.