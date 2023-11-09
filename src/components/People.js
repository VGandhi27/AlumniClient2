import React from 'react'
import { Link } from 'react-router-dom'
import Stud from '../assets/_Students1.png'
import "../styles/base.css"
import {FaStar} from 'react-icons/fa'
const People = () => {
  return (
    <>
    <div style={{maxWidth:"1000px", margin:"0px auto" }}>
    <div
    //  style={{
    //   display:"flex",
    //   justifyContent:"space-around",
    //   margin:"20px 0px",
    //   borderBottom:"1px solid grey" }}
      >
      <ul className="collection with-header">
      <li className="collection-header" style={{justifyContent:"center", textAlign:"center"}}><h3>Members</h3></li>
    <li className="collection-item avatar">
      <img src={Stud} alt="" className="circle"/>
      <span className="title">Title</span>
      <p style={{color: "black"}}>First Line <br/>
         Second Line
      </p>
      <Link to="#!" className="secondary-content"><FaStar/></Link>
    </li>
    <li className="collection-item avatar">
    <img src={Stud} alt="" className="circle"/>
      <span className="title">Title</span>
      <p style={{color: "black"}}>First Line <br/>
         Second Line
      </p>
      <Link to="#!" className="secondary-content"><FaStar/></Link>
    </li>
    <li className="collection-item avatar">
      <i className="material-icons circle green">insert_chart</i>
      <span className="title">Title</span>
      <p style={{color: "black"}}>First Line <br/>
         Second Line
      </p>
      <Link to="#!" className="secondary-content"><FaStar/></Link>
    </li>
    <li className="collection-item avatar">
      <i className="material-icons circle red">play_arrow</i>
      <span className="title">Title</span>
      <p style={{color: "black"}}>First Line <br/>
         Second Line
      </p>
      <Link to="#!" className="secondary-content"><FaStar/></Link>
    </li>
  </ul>
            
  </div>
    </div>

    </>
            
  )
}

export default People
