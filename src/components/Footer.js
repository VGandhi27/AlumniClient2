import React from 'react';
import {FaRegCopyright }from 'react-icons/fa6';
import "../styles/base.css";
const Footer = () => {
  return (
    <div className='Footer'>
      <center>
     <ul  >
        <li  >About</li> 
        <li >Blog</li>
        <li>Help</li>
        <li>Privacy</li>
        <li>Terms</li>
        <li>Contact</li>
        <li>Our Contributions</li>
        <li>Join Us</li>
        </ul> 
        <p style={{color: "Black"}}> <FaRegCopyright/> Alumni Network </p></center>
    </div>
  )
}

export default Footer
