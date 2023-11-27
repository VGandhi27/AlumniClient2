import React from 'react'
import Navbar from '../components/Navbar';
import FixedNav from '../components/FixedNav';
import Notes from '../components/Notes';
const Dashboard = () => {
  return (
    <>
     <FixedNav/>
     <Navbar/> 

     {/* <div style={{maxWidth:"500px", margin:"0px auto" }}>
     <div  style={{
      display:"flex",
      justifyContent:"space-around",
      margin:"20px 0px",

    }}className="progress">Loading
      <div className="indeterminate">  </div>
  </div></div> */}
  <Notes/>
  </>
  )
}

export default Dashboard
