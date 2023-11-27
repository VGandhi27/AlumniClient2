import React ,{useEffect} from 'react'
import { Outlet, Link , useLocation} from "react-router-dom";
import {useNavigate} from 'react-router-dom'

import { FiSearch } from 'react-icons/fi'; 
import "../styles/base.css";

const FixedNav = () => {
  let navigate =useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem('token')
    navigate('/')
  }
  let location = useLocation();
  useEffect(() => {
    console.log(location.pathname);
  }, [location])
  return (
    <div className="navbar">
      <Link to="/">Alumni Network</Link>
            <div className="search-container">
        <input type="text" placeholder="Search..." name="search" />
        <button type="submit" style={{color:'white'}} className="search-button">
          <FiSearch /> {/* Use the FiSearch icon */}
        </button></div>
        <button className='btn-red'onClick={handleLogout}>Logout</button>
      
    </div>
  );
};

// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <div className="content">
//         <h1>Fixed Navbar Example</h1>
//         <p>Scroll down to see the fixed navbar.</p>
//         {/* Add your page content here */}
//       </div>
//     </div>
//   );
// };

export default FixedNav;
