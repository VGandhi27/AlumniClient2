import "../styles/base.css";
import React from 'react'
import StudGath from '../assets/_Students1.png'
import Geton from '../assets/geton.png'
import { Link } from "react-router-dom";
// import { BsPersonFill } from 'react-icons/bs';
const Signup = () => {
  return (
    <>
     {/* use for designing the alumni network */}
     
     <div className="brief">
      <div className="left ">
      <h1 >Alumni Network</h1>
      <h2>Create a new Account</h2>
      <div className="form">
        <form >
        
            <input placeholder = " Name " type="text" />

            <input type="email" placeholder= "Email" id="email" name="email"/>
            <input type="password" placeholder= "Password" id="password" name="password"/>
            <input type="password" placeholder= "Confirm Password" id="conpassword" name="conpassword"/>

             <button className=" btn-blue"  type="submit" style={{Background:"Blue"}}> SignUp </button>
             <label htmlFor="">Already a User</label>
             <label htmlFor="">Get the app</label>
             <img src={Geton} style={{padding:"10px"}}></img>

        </form>
    </div>
             </div>
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
    </div>
    </>
  )
}

export default Signup
