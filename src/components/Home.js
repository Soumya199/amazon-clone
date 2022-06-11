import React from 'react'
import "../style/Home.css"
import scrollImg1 from "../res/scrollImg1.jpg"
import Product from './Product'


function Home() {
  return (
    <div className="home">
        <div className="home-container">
           <img className='home-image' src={scrollImg1} alt="" />
           <div className="home-row">
            <Product rating={3}/>
            <Product/>
           </div>
           <div className="home-row">
           <Product/>
           <Product/>
           <Product/>
           </div>
           <div className="home-row">
           <Product/>
           </div>
           
        </div>
    </div>
  )
}

export default Home