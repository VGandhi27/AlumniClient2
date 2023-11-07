// import React, { Component } from 'react';

// const sidenavStyle = {
//   height: '100%',
//   width: 0,
//   position: 'fixed',
//   zIndex: 1,
//   top: 0,
//   left: 0,
//   backgroundColor: '#111',
//   overflowX: 'hidden',
//   transition: '0.5s',
//   paddingTop: '60px',
// };

// const sidenavLinkStyle = {
//   padding: '8px 8px 8px 32px',
//   textDecoration: 'none',
//   fontSize: '25px',
//   color: '#818181',
//   display: 'block',
//   transition: '0.3s',
// };

// const closeBtnStyle = {
//   position: 'absolute',
//   top: 0,
//   right: '25px',
//   fontSize: '36px',
//   marginLeft: '50px',
// };

// class Sidenav extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isSidenavOpen: false,
//     };
//   }

//   openNav = () => {
//     this.setState({ isSidenavOpen: true });
//   };

//   closeNav = () => {
//     this.setState({ isSidenavOpen: false });
//   };

//   render() {
//     const { isSidenavOpen } = this.state;
//     const mainStyle = isSidenavOpen ? { marginLeft: '250px' } : {};
//     const bodyStyle = isSidenavOpen ? { backgroundColor: 'rgba(0,0,0,0.4)' } : {};

//     return (
//       <div>
//         <div id="mySidenav" style={{ ...sidenavStyle, width: isSidenavOpen ? '250px' : 0 }}>
//           <a href="javascript:void(0)" className="closebtn" style={closeBtnStyle} onClick={this.closeNav}>
//             &times;
//           </a>
//           <a href="#">About</a>
//           <a href="#">Services</a>
//           <a href="#">Clients</a>
//           <a href="#">Contact</a>
//         </div>

//         <div id="main" style={mainStyle}>
//           <h2>Sidenav Push Example</h2>
//           <p>
//             Click on the element below to open the side navigation menu and push this content to the right. Notice that we add a black see-through background-color to body when the sidenav is opened.
//           </p>
//           <span style={{ fontSize: '30px', cursor: 'pointer' }} onClick={this.openNav}>
//             &#9776; open
//           </span>
//         </div>
//       </div>
//     );
//   }
// }

// export default Sidenav;
