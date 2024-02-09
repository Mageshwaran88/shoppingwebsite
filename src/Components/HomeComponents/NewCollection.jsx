import React, { useEffect } from 'react'
import './NewCollection.css'
import collectdata from './collectdata'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const NewCollection = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  return (
    <div className='new-collection'>
      <h1>New Collection</h1>
      <div className='collection'>
        {collectdata.map((cd,i)=>(
          <div key={i} className='collection-items' data-aos='fade-up'>
          <img src={cd.img} />
          <h2>{cd.name}</h2>
          <p>{cd.price}</p>
          </div>
        ))}
      </div>

    </div>
  )
}
