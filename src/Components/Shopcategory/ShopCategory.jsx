import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext.'
import { Item } from './Item'
import './ShopCategory.css'


export const ShopCategory = (props) => {
  const {allproducts} =useContext(ShopContext)
  return (
    <div className='shop-category'>
      <div className='shopcategory-products'>
        {allproducts.map((da,i)=>{
          if(props.category=== da.category){
            return <Item key={i} id={da.id} name={da.name} price={da.price} img={da.img}/>
          }else{
            return null
          }
        }
          
      )}
      </div>
    </div>
  )
}
