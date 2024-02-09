import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext.'
import { useParams } from 'react-router-dom'
import BreadCrum from './BreadCrum'
import { Productdisplay } from './Productdisplay'

export const Products = () => {
  const {allproducts} = useContext(ShopContext);
  const {productId} =useParams();
  const products =allproducts.find((e)=>e.id === Number(productId));
  return (
    <div>
      <BreadCrum products={products}/>
      <Productdisplay products={products}/>
    </div>
  )
}

export default Products
