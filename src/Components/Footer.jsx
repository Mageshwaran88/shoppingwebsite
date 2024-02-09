import React from 'react'
import './Footer.css'
import logo from '../assets/images.png'
import gmailicon from "../assets/download.png"
import instaicon from '../assets/download.jpeg'
import whatsappicon from '../assets/download (1).jpeg'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={logo} />
            <p>Mageshshop</p>
        </div>
        <div className=' footer-allicon'>
        <div className='footer-icon'>
             <img src={gmailicon}  /> 
        </div>
        <div className='footer-icon'>
            <img src={instaicon}  /> 
        </div> 
        <div className='footer-icon'>
             <img src={whatsappicon}  />
        </div>
        </div> 
        <div className='footer-copyright'>
            <hr />
            <p>Copyright @ 2024 - All Right Reserved</p>
        </div>
        
    </div>
  )
}
