import React from 'react'
import "../style/Product.css"

function Product(props) {
  return (
    <div className="product">
        <div className="product-info">
            <p>Alexa your virtual Assistant</p>
            <p className='product-price'><small>$</small><strong>20.45</strong></p>
            <div className="product-rating">
              {Array(props.rating).fill().map(()=>{
                return <p>*</p>
              })}
                
            </div>
        </div>
        <img src="https://m.media-amazon.com/images/I/61MbLLagiVL._AC_UY327_FMwebp_QL65_.jpg" alt="" />
        <button>Add To Cart</button>
    </div>
  )
}

export default Product