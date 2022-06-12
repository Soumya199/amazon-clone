import React from 'react'
import "../style/CheckoutProduct.css"
import {useStateValue} from "../contexts/StateProvider"


function CheckoutProduct({id,image,title,price,rating}) {
    const [state,dispatch]=useStateValue()
    const removeFromCart=()=>{
        console.log(state)
        dispatch({
            type:"REMOVE_FROM_CART",
            id:id
        })
    }
  return (
    <div className="checkout-product">
        <img src={image} alt="" className='checkout-product-image' />
        <div className="checkout-product-info">
            <p className="checkout-product-title">{title}</p>
            <p className="checkout-product-price">
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className="checkout-product-rating">
                {Array(rating).fill().map(()=>{
                  return  <p>*</p>
                })}
            </div>
            <button onClick={removeFromCart}>Remove from Cart</button>
        </div>

    </div>
    
  )
}

export default CheckoutProduct