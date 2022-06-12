import React from 'react'
import "../style/Product.css"
import {useStateValue} from "../contexts/StateProvider"

function Product({id,title,image,price,rating}) {
 const [state,dispatch]=useStateValue()
  const addToCart=()=>{
    //dispatch the item to data layer
    dispatch({
      type:"ADD_TO_Cart",
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating
      },
    })
  }
  return (
    <div className="product">
        <div className="product-info">
            <p>{title}</p>
            <p className='product-price'><small>$</small><strong>{price}</strong></p>
            <div className="product-rating">
              {Array(rating).fill().map(()=>{
                return <p>*</p>
              })}
                
            </div>
        </div>
        <img src="https://m.media-amazon.com/images/I/61MbLLagiVL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
        <button onClick={addToCart}>Add To Cart</button>
    </div>
  )
}

export default Product