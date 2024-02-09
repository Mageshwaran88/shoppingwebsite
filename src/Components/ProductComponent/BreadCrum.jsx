import React from 'react'
import './BreadCrum.css'

 export const BreadCrum = (props) => {
  const {products} = props;
  return (
    <div className='breadcrum'>
     <p>You are selected {products.category} category in {products.category} {products.name}</p> 
    </div>
  )
}

export default BreadCrum
