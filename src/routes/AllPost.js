import React from 'react'
import Navbar from '../components/Navbar';
import FixedNav from '../components/FixedNav';
import CreatePost from '../components/AddNote'
const Dashboard = () => {
  return (
    <>
     <FixedNav/>
     <Navbar/> 
     
     <CreatePost/>

    </>
  )
}

export default Dashboard