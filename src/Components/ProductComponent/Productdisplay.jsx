import React, { useContext } from 'react'
import './Productdisplay.css'
import { ShopContext } from '../Context/ShopContext.';

export const Productdisplay = (props) => {
    const {products}=props; 
    const {addtocart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'> 
        <div className='productdisplay-img-list'>
            <img src={products.img} />
            <img src={products.img} />
            <img src={products.img} />
            <img src={products.img} />
        </div>
        <div className='productdisplay-img'>
        <img className='productdisplay-main-img' src={products.img} />
        </div>
        </div>
        <div className='productdisplay-right'>
          <p>{products.category} {products.name}</p>
          <h2>${products.price}</h2>
          <p>Select Size</p>
          <div className='productdisplay-size'>
          <div className='size'>S</div>
          <div className='size'>M</div>
          <div className='size'>L</div>
          <div className='size'>XL</div>
          <div className='size'>XXL</div>
          </div>
          <h1>{products.name}</h1>
          <button onClick={()=>{addtocart(products.id)}}>Add to Cart</button>
             
        </div>

    </div>
  )
}
