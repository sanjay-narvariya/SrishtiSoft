import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-scroll';

function Navbar() {
  return (
    <AppBar position="sticky" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          SrishtiSoft Innovations
        </Typography>
        {["home", "about", "services", "contact"].map((section) => (
          <Button key={section} color="inherit">
            <Link
              to={section}
              smooth={true}
              duration={500}
              offset={-70}
              style={{ color: "white", textDecoration: "none", cursor: "pointer" }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;


// import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// function Navbar() {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   useEffect(() => {
//     showButton();
//   }, []);

//   window.addEventListener('resize', showButton);

//   return (
//     <>
//       <nav className='navbar'>
//         <div className='navbar-container'>
//           <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
//             TRVL
//             <i class='fab fa-typo3' />
//           </Link>
//           <div className='menu-icon' onClick={handleClick}>
//             <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
//           </div>
//           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//             <li className='nav-item'>
//               <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                 Home
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link
//                 to='/services'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 Services
//               </Link>
//             </li>
//             <li className='nav-item'>
//               <Link
//                 to='/products'
//                 className='nav-links'
//                 onClick={closeMobileMenu}
//               >
//                 Products
//               </Link>
//             </li>

//             <li>
//               <Link
//                 to='/sign-up'
//                 className='nav-links-mobile'
//                 onClick={closeMobileMenu}
//               >
//                 Sign Up
//               </Link>
//             </li>
//           </ul>
//           {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;
