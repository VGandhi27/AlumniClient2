import React from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi'; 
import "../styles/base.css";

const FixedNav = () => {
  return (
    <div className="navbar">
      <Link to="/">Alumni Network</Link>
            <div className="search-container">
        <input type="text" placeholder="Search..." name="search" />
        <button type="submit" style={{color:'white'}} className="search-button">
          <FiSearch /> {/* Use the FiSearch icon */}
        </button></div>
        <button className='btn-red'>Logout</button>
      
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
