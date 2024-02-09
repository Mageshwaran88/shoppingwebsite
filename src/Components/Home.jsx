import React from 'react'
import { Hero } from './HomeComponents/Hero'
import { Popular } from './HomeComponents/Popular'
import { Offer } from './HomeComponents/Offer'
import { NewCollection } from './HomeComponents/NewCollection'

export const Home = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offer/>
        <NewCollection/>
    </div>
  )
}
