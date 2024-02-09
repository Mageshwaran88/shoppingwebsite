import React, { useEffect } from 'react'
import './Offer.css'
import offimg from '../../assets/614APWmNqVL._SL1500_.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Offer = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  return (
    <div className='offer'>
        <div className='left-offer' data-aos='fade-right'> 
            <h1>Exclusive Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>
        </div>
        <div className="right-offer">
            <img src={offimg} />
        </div>
    </div>
  )
}
