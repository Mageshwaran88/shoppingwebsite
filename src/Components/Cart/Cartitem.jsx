import React, { useContext } from 'react'
import './Cartitem.css'
import { ShopContext } from '../Context/ShopContext.'

export const Cartitem = () => {
  const {getTotalCartAmount, allproducts,cartItems,addtocart,removefromcart} = useContext(ShopContext)
  return (
    <div className='cartitem'>
      <div className='cartitem-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {allproducts.map((e,i)=>{
        if(cartItems[e.id]>0){
          return <div>
          <div key={i} className='cartitem-format cartitem-format-main'>
            <img className='carticon-product-icon' src={e.img}/>
            <p>{e.name}</p>
            <p>{e.price}</p>
            <button className='cartitem-quantity'>{cartItems[e.id]}</button>
            <p>{e.price*cartItems[e.id]}</p>
            <button className='cartitem-remove' onClick={()=>{removefromcart(e.id)}}>Remove</button>
          </div>
          <hr />
          </div>
        }
        return null;
      })}
      <div className='cartitem-down'>
        <div className='cartitem-total'>
          <h1>Cart Totals</h1>
          <div>
            <div className='cartitem-total-item'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className='cartitem-total-item'>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className='cartitem-total-item'>
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>PROCEED</button>
        </div>
      </div>
        </div>
  )
}

