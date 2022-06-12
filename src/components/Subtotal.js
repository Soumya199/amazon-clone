import React from 'react'
import "../style/Subtotal.css"
import {useStateValue} from "../contexts/StateProvider"
import {getCartTotal} from "../contexts/reducer"

function Subtotal() {
  const [state,dispatch]=useStateValue()
  const totalAmount=getCartTotal(state.cart);
  return (
    <div className="subtotal">
        <p>Subtotal ({state.cart?.length}): <strong>{totalAmount}$</strong></p>
        <small className="subtotal-gift">
            <input type="checkbox" name="" id="" />
            This Order contains a gift
        </small>
        <button>Proceed to checkout</button>
    </div>
  )
}

export default Subtotal