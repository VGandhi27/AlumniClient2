import "../styles/base.css";
import React from 'react'
import StudGath from '../assets/_Students1.png'
import Geton from '../assets/geton.png'
import { Link } from "react-router-dom";
import Footer from "./Footer";
// import { BsPersonFill } from 'react-icons/bs';
const Signup = () => {
  return (
    <>
     {/* use for designing the alumni network */}
     
     <div className="brief">
        {/* Right part */}
        <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img
              src={StudGath}
              alt="about img "
            
            />
          </div>
       
 
        </div>
    </div>
      <div className="left ">
      <h1 >Alumni Network</h1>
      <h2>Log in to your Account</h2>
      <div className="form">
        <form >
            <label htmlFor="">Please enter your email address and and we'll send you a link to get back into your account.</label>
            <input  size="10px" type="email" placeholder= "Email" id="email" name="email"/>
             <button className=" btn-blue"  type="submit" style={{Background:"Blue"}}> Forgot Password </button>
             <label htmlFor=""><Link to="/signin">Back to SignIn</Link></label>
             <label htmlFor=""><Link to="/signup" >Don't have an Account??</Link></label>
             <label htmlFor=""><Link to ="/"></Link>Get the app</label>
             <img src={Geton} style={{padding:"10px"}}></img>

        </form>
    </div>
             </div>
        
    </div>
    <Footer/>
    </>
  )
}

export default Signup
