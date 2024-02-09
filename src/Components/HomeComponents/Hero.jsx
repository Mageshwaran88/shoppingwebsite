import React, { useEffect } from "react";
import './Hero.css'
import heroimg from "../../assets/pretty-young-fashion-sensual-woman-posing-white-wall_231208-6397.avif"
import arrowicon from "../HomeComponents/images/images (2).png"
import Aos from "aos";
import "aos/dist/aos.css"
export const Hero = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className="hero">
      <div className="hero-left" data-aos='fade-right'>
        <h1>Welcome to Mageshshop</h1>
        <h2>New Collection  are Available for everyone!</h2>
        <h2>25% Off On All Products!</h2>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <img src={arrowicon} />
        </div>
      </div>
      <div className="hero-right">
        <img src={heroimg} />
      </div>
    </div>
  );
};
