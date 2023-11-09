import React from 'react'
import M from 'materialize-css';
import { useEffect } from 'react';

const CareerCenter = () => {
    useEffect(() => {
    // Initialize collapsible on component mount
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems);

    // Clean up on component unmount
    return () => {
      instances.forEach(instance => {
        // Destroy each collapsible instance
        instance.destroy();
      });
    };
  }, []); 
  return (
    <div style={{maxWidth:"900px", margin:"0px auto" }}>
      <ul className="collapsible collapsible popout">
    <li>
      <div className="collapsible-header" >
        {/* <i className="material-icons">filter_drama</i> */}
       <h5 style={{color:"black"}} >Career Support Center</h5> 
        </div>
      <div className="collapsible-body" style={{background:"white"}}><span> <h3 style ={{justifyContent : "center ",textAlign:"center"}}>0 Members</h3>
      <button className=" btn-blue"  type="submit" style={{Background:"Blue",margin:"20px",justifyContent : "center ",textAlign:"center"}}> Join In </button>
      <button className=" btn-blue"  type="submit" style={{Background:"Blue", margin:"20px",justifyContent : "center ",textAlign:"center"}}> Write a post </button>


       </span></div>
    </li>
    <li>
      <div className="collapsible-header">
        {/* <i className="material-icons">place</i> */}
        <h5 style={{color:"black"}} > Entrepreneurship</h5></div>
        <div className="collapsible-body" style={{background:"white"}}><span> <h3 style ={{justifyContent : "center ",textAlign:"center"}}>0 Members</h3>
      <button className=" btn-blue"  type="submit" style={{Background:"Blue",margin:"20px",justifyContent : "center ",textAlign:"center"}}> Join In </button>
      <button className=" btn-blue"  type="submit" style={{Background:"Blue", margin:"20px",justifyContent : "center ",textAlign:"center"}}> Write a post </button>


       </span></div>    </li>
    <li>
      <div className="collapsible-header">
        {/* <i className="material-icons">whatshot</i> */}
        <h5 style={{color:"black"}} > Higher Education Center for Engineering</h5>
</div>
<div className="collapsible-body" style={{background:"white"}}><span> <h3 style ={{justifyContent : "center ",textAlign:"center"}}>0 Members</h3>
      <button className=" btn-blue"  type="submit" style={{Background:"Blue",margin:"20px",justifyContent : "center ",textAlign:"center"}}> Join In </button>
      <button className=" btn-blue"  type="submit" style={{Background:"Blue", margin:"20px",justifyContent : "center ",textAlign:"center"}}> Write a post </button>


       </span></div>    </li>
  </ul>
    </div>
  )
}

export default CareerCenter
