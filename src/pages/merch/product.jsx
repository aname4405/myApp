import React, {useContext} from "react";
import {MerchContext} from '../../context/merchContextProvider'

export default (props) => {
    const {id, productName, price, productImage} = props.data;
        const {addToCart, cartItems} = useContext(MerchContext);

    const cartItemAmount = cartItems[id]
    return <div className="product">
        <img src={productImage} />
        <div className="description">
            <p>
                <b>{productName}</b>
            </p>
            <p>£{price}</p>
        </div>
        <button className="addToCartBttn" onClick={()=> addToCart(id)}>
            Add To Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
            </button>
    </div>;
};