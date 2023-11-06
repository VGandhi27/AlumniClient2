import React from 'react'
import "../styles/base.css"
import { Link } from 'react-router-dom'
import {FaRegCircleQuestion} from 'react-icons/fa6'
const NoPage = () => {
  return (
    <div className='nopage'>
        
      <h1> <FaRegCircleQuestion/> Oops! Something went wrong</h1>
      <h3>We're sorry. The Web address you entered is not a functioning page on our site.</h3>
      <h2>Go to Alumni's <Link to="/">Home</Link> Page</h2>
    </div>
  )
}

export default NoPage
