import { useEffect } from 'react'
import './Popular.css'
import products from './Product.js'
import Aos from 'aos'
import 'aos/dist/aos.css'


export const Popular = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  })

  return (
    <div className='popular'>
          <h1>Popular in Women</h1>
        <div>     
        <div className='popular-items' data-aos='fade-up'>
              {products.map((pro,i)=>(
                <div key={i} className='popular-card'>
                  <img src={pro.img}  />
                <h2>{pro.name}</h2>
                <p>{pro.price}</p>
              </div>
              ))}
              </div>
            </div>
    </div>
  )
}
