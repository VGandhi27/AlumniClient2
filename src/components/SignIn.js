import "../styles/base.css";
import React from 'react'
import StudGath from '../assets/_Students1.png'
import Geton from '../assets/geton.png'
// import { BsPersonFill } from 'react-icons/bs';
const Signup = () => {
  return (
    <>
     {/* use for designing the alumni network */}
     
     <div className="brief">
      <div className="left ">
      <h1 >Alumni Network</h1>
      <h2>Log in to your Account</h2>
      <div className="form">
        <form >
        

            <input type="email" placeholder= "Email" id="email" name="email"/>
            <input type="password" placeholder= "Password" id="password" name="password"/>

             <button className=" btn-blue"  type="submit" style={{Background:"Blue"}}> Login </button>
             <label htmlFor="">Forget Your Password ??</label>
             <label htmlFor="">Don't have an Account??</label>
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
