import React from 'react'
import "../style/Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import {useStateValue} from "../contexts/StateProvider"

function Checkout() {
  const [state,dispatch]=useStateValue()
  return (
    <div className="checkout">
        <div className="checkout-left">
            <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="" className="checkout-ad" />
            <div>
                <h2 className="checkout-title">
                    Your Shoping Cart
                </h2>
               {state?.cart.map((item)=>{
                return <CheckoutProduct
                 id={item.id}
                 image={item.image}
                 title={item.title}
                 price={item.price}
                 rating={item.rating}
                 />
               })}
            </div>
        </div>
        <div className="checkout-right">
         <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout