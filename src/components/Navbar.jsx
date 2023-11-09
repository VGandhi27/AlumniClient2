import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBriefcase, FaComment, FaUserGraduate, FaUsers, FaCaretDown } from 'react-icons/fa';


const sidenavStyle = {
  height: '100%',
  width: 0,
  position: 'fixed',
  zIndex: 1,
  top: 0,
  left: 0,
  backgroundColor: '#333',
  overflowX: 'hidden',
  transition: '0.5s',
  paddingTop: '60px',
  textAlign: 'center',
  backgroundImage: 'url("your-background-image.jpg")',
  backgroundSize: 'cover',
  boxShadow: '5px 0px 10px rgba(0, 0, 0, 0.2)',
};

const sidenavLinkStyle = {
  textDecoration: 'none',
  fontSize: '24px',
  color: '#fff',
  display: 'block',
  margin: '20px 0',
  transition: '0.3s',
};

const closeBtnStyle = {
  position: 'absolute',
  top: '10px',
  right: '10px',
  fontSize: '36px',
  cursor: 'pointer',
  color: '#fff',
};

const dropdownStyle = {
  position: 'relative',
  display: 'block',
};

const dropdownContentStyle = {
  display: 'none',
  position: 'absolute',
  backgroundColor: '#222',
  boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)',
  zIndex: 1,
  minWidth: '250px',
  right: 0,
  top: '50px', // Adjust the top position
};

const dropdownTitleStyle = {
  padding: '30px',
  textDecoration: 'none',
  display: 'block',
  color: '#fff',
  transition: '0.3s',
  cursor: 'pointer',
};

const dropdownTitleHoverStyle = {
  backgroundColor: '#555',
};

class Sidenav extends Component {
  openNav = () => {
    this.setState({ sidenavWidth: '250px' });
  }

  closeNav = () => {
    this.setState({ sidenavWidth: '0' });
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({ dropdownOpen: !prevState.dropdownOpen }));
  }

  state = {
    sidenavWidth: '0',
    dropdownOpen: false, // Initially closed
  };

  render() {
    return (
     
      <div>
        <div id="mySidenav" style={{ ...sidenavStyle, width: this.state.sidenavWidth }}>
          <a href="javascript:void(0)" className="closebtn" style={closeBtnStyle} onClick={this.closeNav}>&times;</a>
          <div>
            <Link to="/profile" style={sidenavLinkStyle}><FaUser /> Profile</Link>
            <Link to="/updateprofile" style={sidenavLinkStyle}><FaUser /> Updated Profile</Link>
            <Link to="/careercenter" style={sidenavLinkStyle}><FaBriefcase /> Career Center</Link>
            <Link to="/people" style={sidenavLinkStyle}><FaUser /> People</Link>
            <Link to="/creategroup" style={sidenavLinkStyle}><FaUsers /> Create Group</Link>
            <div style={dropdownStyle}>
              <div style={{ ...sidenavLinkStyle, cursor: 'pointer' }} onClick={this.toggleDropdown}><FaCaretDown /> Post</div>
              <div id="dropdown-content" style={{ ...dropdownContentStyle, display: this.state.dropdownOpen ? 'block' : 'none' }}>
                <Link to="/createPost" style={{ ...dropdownTitleStyle, transition: '0.3s' }}><FaBriefcase /> Job</Link>
                <Link to="/createPost" style={{ ...dropdownTitleStyle, transition: '0.3s' }}><FaComment /> Discussion</Link>
                <Link to="/createPost" style={{ ...dropdownTitleStyle, transition: '0.3s' }}><FaUserGraduate /> Internship</Link>
              </div>
            </div>
            <Link to="/contact" style={sidenavLinkStyle}><FaUser /> Contact</Link>
          </div>
        </div>

               <h1><span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={this.openNav}>&#9776; Features</span>
       </h1> 
      </div>
    );
  }
}

export default Sidenav;
