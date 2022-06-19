import React from 'react'
import moment from "moment"
import CheckoutProduct from './CheckoutProduct'
import "../style/Order.css";

function Order({order}) {
  return (
    <div className='order'>
        <h1>Order</h1>
        <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
        <p className="order-id">
            <small>Order ID: {order.id}</small>
        </p>
        {order.data.cart.length>0?order.data.cart?.map((item)=>{
                return <CheckoutProduct
                 id={item.id}
                 image={item.image}
                 title={item.title}
                 price={item.price}
                 rating={item.rating}
                 hidebutton
                 />
               }):<p style={{color:"green"}}>Your Cart is Empty</p>}
               <h3 className='order-total'>Order Total:{order.data.amount/100}$</h3>
    </div>
  )
}

export default Order