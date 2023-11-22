import "../styles/base.css";
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import StudGath from '../assets/_Students1.png'
import Geton from '../assets/geton.png'
import M from 'materialize-css';
import { Link } from "react-router-dom";
// import { BsPersonFill } from 'react-icons/bs';
const Signup = (props) => {const [credentials, setCredentials] = useState({email:"",password:""})
let navigate =useNavigate();

  const handleSubmit =async(e)=>{
    e.preventDefault(); 
   
    const response = await fetch(`http://localhost:5000/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email:credentials.email,password:credentials.password})

    });
    const json = await response.json()
    console.log(json);
    if(json.success){
      //save auth token and redirect
      localStorage.setItem('token',json.autoken);
      navigate("/");
      // props.showAlert('Successfully Login','success')
      M.toast({html: 'Successfully SignUp', classes:"#43a047 green darken-1"})

    }
    else{
      // props.showAlert('Invalid Credentials','danger')
      M.toast({html: 'Invalid Credentials', classes:"#d32f2f red darken-2"})

    }
 
  }
  const onChange=(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value })
}
  return (
    <>
     {/* use for designing the alumni network */}
     
     <div className="brief">
      <div className="left ">
      <h1 >Alumni Network</h1>
      <h2>Log in to your Account</h2>
      <div className="form">
        <form onSubmit={handleSubmit} >
        

            <input type="email" placeholder= "Email" id="email" name="email" value={credentials.email} style={{color:"white"}} onChange={onChange}/>
            <input type="password" placeholder= "Password" id="password" name="password" value={credentials.password} onChange={onChange}/>

             <Link to ="/dashboard" ><button className=" btn-blue"  type="submit" style={{Background:"Blue"}}> Login </button></Link>
           <label htmlFor=""> <Link to="/forgotpassword"> Forget Your Password ??</Link></label>
             <label htmlFor=""><Link to="/signup">Don't have an Account??</Link></label>
             <label htmlFor=""><Link to="/"></Link>Get the app</label>
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
