import "../styles/base.css";
import StudGath from '../assets/_Students1.png'
import Geton from '../assets/geton.png'
import React ,{useState} from 'react'
import M from 'materialize-css';
import {useNavigate} from 'react-router-dom'
import { Link } from "react-router-dom";
// import { BsPersonFill } from 'react-icons/bs';
const Signup = (props) => {
  const [credentials, setCredentials] = useState({name:"",email:"",password:"",cpassword:""})
  let navigate =useNavigate();

    const handleSubmit =async(e)=>{
      const {name,email,password,cpassword}=credentials;
      e.preventDefault(); 
     
      const response = await fetch(`https://super-bassoon-495qjjvxq5q3qgq5-5000.app.github.dev/api/auth/createuser`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({name,email,password})
  
      });
      const json = await response.json()
      console.log(json);
      if(json.success){
        //save auth token and redirect
        localStorage.setItem('token',json.autoken);
        navigate("/lookup");
        // props.showAlert('Successfully SignUp','success')
        M.toast({html: 'Successfully SignUp', classes:"#43a047 green darken-1"})
      }
      else{
          //  props.showAlert('Invalid Credentials','danger')
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
      <h2>Create a new Account</h2>
      <div className="form">
        <form onSubmit={handleSubmit}>
        
            <input placeholder = " Name " type="text" id="name" name='name' value={credentials.name} onChange={onChange}/>

            <input type="email" placeholder= "Email"  id="email" name='email' onChange={onChange}/>
            <input type="password" placeholder= "Password" id="password"  name='password' onChange={onChange} minLength={5} required/>
            <input type="password" placeholder= "Confirm Password" id='cpassword' name='cpassword' onChange={onChange} minLength={5} required/>

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
