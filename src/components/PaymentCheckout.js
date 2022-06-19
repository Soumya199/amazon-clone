import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import {useStateValue} from "../contexts/StateProvider"
import CheckoutProduct from './CheckoutProduct'
import "../style/PaymentCheckout.css"
import {useStripe, useElements,CardElement} from '@stripe/react-stripe-js';
import {getCartTotal} from "../contexts/reducer"
import axios from './axios'



function PaymentCheckout() {
  const navigate=useNavigate();
  const [state,dispatch]=useStateValue()
  const stripe=useStripe();
  const elements=useElements()
  const [error, seterror] = useState(null)
  const [disabled, setdisabled] = useState(true)
  const [processing, setprocessing] = useState("")
  const [succeeded, setsucceeded] = useState(false)
  const totalAmount=getCartTotal(state.cart);
  const [clientSecreat,setClientSecret]=useState(true)



  useEffect(() => {
    const getClientSecret=async ()=>{
      const response = await axios({
        method:"POST",
        url:`/payments/create?total=${totalAmount*100}`  //stripe except the total curency subunit ex- 5 rupee = 500 paisa
      });
      setClientSecret(response.data.clientSecret)
    }

    getClientSecret();
  }, [state.cart])
  
  console.log(clientSecreat,"Secret")
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    setprocessing(true);
    const payload=await stripe.confirmCardPayment(clientSecreat,{
      payment_method:{
        card:elements.getElement(CardElement)
      }
    })
    console.log(payload,"payload");
    if(payload.paymentIntent){
      setsucceeded(true);
      seterror(null)
      setprocessing(false)
      dispatch({
        type:"CLEAR_CART"
      })
      navigate("/orders")
    }
  }

  const handleChange=(e)=>{
    setdisabled(e.empty);
    seterror(e.error ? e.error.message:"")
  }
  return (
    <div className='payment-checkout'>
      <div className="payment-checkout-container">
        <h1>Checkout({state.cart.length})items</h1>
        <div className="payment-checkout-section">
          <div className="payment-checkout-title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment-checkout-address">
            <p>{state.user?.email}</p>
            <p>Near College</p>
            <p>756121, Odisha</p>
          </div>
        </div>
        <div className="payment-checkout-section">
          <div className="payment-checkout-title">
            <h3>Review item and Delivery</h3>
          </div>
          <div className="payment-checkout-item">
          {state.cart.length>0?state.cart.map((item)=>{
                return <CheckoutProduct
                key={item.index}
                 id={item.id}
                 image={item.image}
                 title={item.title}
                 price={item.price}
                 rating={item.rating}
                 />
               }):navigate("/checkout")}
          </div>
        </div>
        <div className="payment-checkout-section">
          <div className="payment-checkout-title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment-checkout-details">
            {/* Stripe implimentation */}
            <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange}/>

            <div className="payment-checkout-price-container">
            <strong> Order Total {totalAmount}$</strong>
            <button disabled={processing || disabled || succeeded}>
             <span>{processing ? <p>Processing</p>:"Buy Now"}</span>
            </button>
            </div>
            {/* Error */}
            {error && {error}}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentCheckout