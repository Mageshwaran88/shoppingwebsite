import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import './Item.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

export const Item = (props) => {
  useEffect(()=>{
    Aos.init({duration:2000})
  })
  return (
    <div className="item" data-aos='fade-up'>
      <Link to={`/product/${props.id}`}>
        <img src={props.img} />
      </Link>
      <h1>{props.name}</h1>
      <p>{props.price}</p>
    </div>
  );
};
