import "../styles/base.css";
import React from 'react'
import StudGath from '../assets/_Students1.png'
const Signup = () => {
  return (
    <>
     {/* use for designing the alumni network */}
     
     <div className="brief">
      <div className="left ">
      <h1 >Alumni Network</h1>
      <h2>Create a new Account</h2>
             <button className="btn"  type="submit"> Alumni </button>
             <button className="btn"  type="submit"> Student </button>
             <button className="btn"  type="submit"> Teacher </button>
             <button className="btn"  type="submit"> Admin </button>
       
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
