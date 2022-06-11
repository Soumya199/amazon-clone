import React from 'react'
import "../style/Checkout.css"
import Subtotal from './Subtotal'

function Checkout() {
  return (
    <div className="checkout">
        <div className="checkout-left">
            <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="" className="checkout-ad" />
            <div>
                <h2 className="checkout-title">
                    Your Shoping Cart
                </h2>
            </div>
        </div>
        <div className="checkout-right">
         <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout