// // // // // // // // // // // // // // // // // // // // // import {Link} from 'react-router-dom'

// // // // // // // // // // // // // // // // // // // // // export default function Navbar() {
// // // // // // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // // // // // //     <nav>
// // // // // // // // // // // // // // // // // // // // //       <Link to='/'>Home </Link>
// // // // // // // // // // // // // // // // // // // // //       <Link to='/register'>Register </Link>
// // // // // // // // // // // // // // // // // // // // //       <Link to='/login'>Login </Link>
// // // // // // // // // // // // // // // // // // // // //     </nav>
// // // // // // // // // // // // // // // // // // // // //   )
// // // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // // // // // // // // // // // // // // import '../styles/Navbar.css'; // Create a CSS file for styling

// // // // // // // // // // // // // // // // // // // // export default function Navbar() {
// // // // // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // // // // //     <nav className="navbar">
// // // // // // // // // // // // // // // // // // // //       <div className="navbar-brand">
// // // // // // // // // // // // // // // // // // // //         <Link to="/" className="nav-link">Anomaly Detection</Link>
// // // // // // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // // // // // //       <div className="nav-links">
// // // // // // // // // // // // // // // // // // // //         <Link to="/register" className="nav-link">Register</Link>
// // // // // // // // // // // // // // // // // // // //         <Link to="/login" className="nav-link">Login</Link>
// // // // // // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // // // // // //     </nav>
// // // // // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // // // // }
// // // // // // // // // // // // // // // // // // // import React from 'react';
// // // // // // // // // // // // // // // // // // // import '../styles/Navbar.css';
// // // // // // // // // // // // // // // // // // // import Logo from './Logo';
// // // // // // // // // // // // // // // // // // // import { Link } from 'react-router-dom';

// // // // // // // // // // // // // // // // // // // const Navbar = () => {
// // // // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // // // //     <nav className="navbar">
// // // // // // // // // // // // // // // // // // //       <Logo />
      
// // // // // // // // // // // // // // // // // // //       <div className="nav-links">
// // // // // // // // // // // // // // // // // // //         <Link to="/" className="nav-item">Home</Link>
// // // // // // // // // // // // // // // // // // //         <Link to="/about" className="nav-item">About</Link>
// // // // // // // // // // // // // // // // // // //         <Link to="/feedback" className="nav-item">Feedback</Link>
// // // // // // // // // // // // // // // // // // //         <Link to="/contact" className="nav-item">Contact Us</Link>
// // // // // // // // // // // // // // // // // // //         <Link to="/reviews" className="nav-item no-dropdown">Reviews</Link>
// // // // // // // // // // // // // // // // // // //         <Link to="/company" className="nav-item">Company</Link>
// // // // // // // // // // // // // // // // // // //       </div>
      
// // // // // // // // // // // // // // // // // // //       <div className="auth-buttons">
// // // // // // // // // // // // // // // // // // //         <Link to="/login" className="login-btn">Login</Link>
// // // // // // // // // // // // // // // // // // //         <Link to="/register" className="signup-btn">Sign up</Link>
// // // // // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // // // // //     </nav>
// // // // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // // // export default Navbar;
// // // // // // // // // // // // // // // // // // import React from 'react';
// // // // // // // // // // // // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // // // // // // // // // // // // import '../styles/Navbar.css';
// // // // // // // // // // // // // // // // // // import Logo from './Logo';

// // // // // // // // // // // // // // // // // // const Navbar = () => {
// // // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // // //     <nav className="navbar">
// // // // // // // // // // // // // // // // // //       <Logo />

// // // // // // // // // // // // // // // // // //       <div className="nav-links">
// // // // // // // // // // // // // // // // // //         <Link to="/" className="nav-item">Home</Link>
// // // // // // // // // // // // // // // // // //         <Link to="/about" className="nav-item">About</Link>
// // // // // // // // // // // // // // // // // //         <Link to="/feedback" className="nav-item">Feedback</Link>
// // // // // // // // // // // // // // // // // //         <Link to="/contact" className="nav-item">Contact Us</Link>
// // // // // // // // // // // // // // // // // //         <Link to="/reviews" className="nav-item no-dropdown">Reviews</Link>
// // // // // // // // // // // // // // // // // //         <Link to="/company" className="nav-item">Company</Link>
// // // // // // // // // // // // // // // // // //       </div>

// // // // // // // // // // // // // // // // // //       <div className="auth-buttons">
// // // // // // // // // // // // // // // // // //         <Link to="/login" className="login-btn">Login</Link>
// // // // // // // // // // // // // // // // // //         <Link to="/register" className="signup-btn">Sign up</Link>
// // // // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // // // //     </nav>
// // // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // // export default Navbar;
// // // // // // // // // // // // // // // // // import React from 'react';
// // // // // // // // // // // // // // // // // import '../styles/Navbar.css';
// // // // // // // // // // // // // // // // // import Logo from './Logo';
// // // // // // // // // // // // // // // // // import { Link } from 'react-router-dom';

// // // // // // // // // // // // // // // // // const Navbar = () => {
// // // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // // //     <nav className="navbar">
// // // // // // // // // // // // // // // // //       <Logo />
      
// // // // // // // // // // // // // // // // //       <div className="nav-links">
// // // // // // // // // // // // // // // // //         <Link to="/" className="nav-item">Home</Link>
// // // // // // // // // // // // // // // // //         <Link to="/about" className="nav-item">About</Link>
// // // // // // // // // // // // // // // // //         <Link to="/feedback" className="nav-item">Feedback</Link>
// // // // // // // // // // // // // // // // //         <Link to="/contact" className="nav-item">Contact Us</Link>
// // // // // // // // // // // // // // // // //         <Link to="/reviews" className="nav-item no-dropdown">Reviews</Link>
// // // // // // // // // // // // // // // // //         <Link to="/company" className="nav-item">Company</Link>
// // // // // // // // // // // // // // // // //       </div>
      
// // // // // // // // // // // // // // // // //       <div className="auth-buttons">
// // // // // // // // // // // // // // // // //         <Link to="/login" className="login-btn">Login</Link>
// // // // // // // // // // // // // // // // //         <Link to="/register" className="signup-btn">Sign up</Link>
// // // // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // // // //     </nav>
// // // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // // export default Navbar;
// // // // // // // // // // // // // // // // import React from 'react';
// // // // // // // // // // // // // // // // import '../styles/Navbar.css';
// // // // // // // // // // // // // // // // import Logo from './Logo';
// // // // // // // // // // // // // // // // import { Link } from 'react-router-dom';

// // // // // // // // // // // // // // // // const Navbar = () => {
// // // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // // //     <nav className="navbar">
// // // // // // // // // // // // // // // //       <Logo />
      
// // // // // // // // // // // // // // // //       <div className="nav-links">
// // // // // // // // // // // // // // // //         <Link to="/" className="nav-item">Home</Link>
// // // // // // // // // // // // // // // //         <Link to="/about" className="nav-item">About</Link>
// // // // // // // // // // // // // // // //         {/* <Link to="/feedback" className="nav-item">Feedback</Link> */}
// // // // // // // // // // // // // // // //         <Link to="/contact" className="nav-item">Contact</Link>
// // // // // // // // // // // // // // // //         <Link to="/reviews" className="nav-item ">Reviews</Link>
// // // // // // // // // // // // // // // //         <Link to="/blog" className="nav-item ">Blog</Link>
// // // // // // // // // // // // // // // //         <Link to="/faqs" className="nav-item ">FAQ</Link>
       
// // // // // // // // // // // // // // // //       </div>
      
// // // // // // // // // // // // // // // //       {/* <div className="auth-buttons">
// // // // // // // // // // // // // // // //         <Link to="/login" className="login-btn">Login</Link>
// // // // // // // // // // // // // // // //         <Link to="/register" className="signup-btn">Sign up</Link>
// // // // // // // // // // // // // // // //       </div> */}
// // // // // // // // // // // // // // // //     </nav>
// // // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // // export default Navbar;
// // // // // // // // // // // // // // // import React, { useContext } from 'react';
// // // // // // // // // // // // // // // import '../styles/Navbar.css';
// // // // // // // // // // // // // // // import Logo from './Logo';
// // // // // // // // // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // // // // // // // // // import { UserContext } from '../../context/userContext';

// // // // // // // // // // // // // // // const Navbar = () => {
// // // // // // // // // // // // // // //   const { user } = useContext(UserContext);

// // // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // // //     <nav className="navbar">
// // // // // // // // // // // // // // //       <Logo />
// // // // // // // // // // // // // // //       <div className="nav-links">
// // // // // // // // // // // // // // //         {user ? (
// // // // // // // // // // // // // // //           <>
// // // // // // // // // // // // // // //             <Link to="/dashboard" className="nav-item">Dashboard (Upload Image as Home)</Link>
// // // // // // // // // // // // // // //             <Link to="/history" className="nav-item">History</Link>
// // // // // // // // // // // // // // //             <Link to="/profile" className="nav-item">Profile</Link>
// // // // // // // // // // // // // // //             <Link to="/logout" className="nav-item">Logout</Link>
// // // // // // // // // // // // // // //           </>
// // // // // // // // // // // // // // //         ) : (
// // // // // // // // // // // // // // //           <>
// // // // // // // // // // // // // // //             <Link to="/" className="nav-item">Home</Link>
// // // // // // // // // // // // // // //             <Link to="/about" className="nav-item">About</Link>
// // // // // // // // // // // // // // //             <Link to="/contact" className="nav-item">Contact</Link>
// // // // // // // // // // // // // // //             <Link to="/reviews" className="nav-item">Reviews</Link>
// // // // // // // // // // // // // // //             <Link to="/blog" className="nav-item">Blog</Link>
// // // // // // // // // // // // // // //             <Link to="/faqs" className="nav-item">FAQ</Link>
// // // // // // // // // // // // // // //           </>
// // // // // // // // // // // // // // //         )}
// // // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // // //     </nav>
// // // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // // };

// // // // // // // // // // // // // // // export default Navbar;
// // // // // // // // // // // // // // import React, { useContext } from 'react';
// // // // // // // // // // // // // // import '../styles/Navbar.css';
// // // // // // // // // // // // // // import Logo from './Logo';
// // // // // // // // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // // // // // // // // import { UserContext } from '../../context/userContext';

// // // // // // // // // // // // // // const Navbar = () => {
// // // // // // // // // // // // // //   const { user, loading } = useContext(UserContext);

// // // // // // // // // // // // // //   // If loading, return null or a loading indicator
// // // // // // // // // // // // // //   if (loading) {
// // // // // // // // // // // // // //     return (
// // // // // // // // // // // // // //       <nav className="navbar">
// // // // // // // // // // // // // //         <Logo />
// // // // // // // // // // // // // //         <div className="nav-links">
// // // // // // // // // // // // // //           {/* Show a loading indicator or nothing */}
// // // // // // // // // // // // // //           <span>Loading...</span>
// // // // // // // // // // // // // //         </div>
// // // // // // // // // // // // // //       </nav>
// // // // // // // // // // // // // //     );
// // // // // // // // // // // // // //   }

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <nav className="navbar">
// // // // // // // // // // // // // //       <Logo />
// // // // // // // // // // // // // //       <div className="nav-links">
// // // // // // // // // // // // // //         {user ? (
// // // // // // // // // // // // // //           <>
// // // // // // // // // // // // // //             <Link to="/dashboard" className="nav-item">Dashboard (Upload Image as Home)</Link>
// // // // // // // // // // // // // //             <Link to="/history" className="nav-item">History</Link>
// // // // // // // // // // // // // //             <Link to="/profile" className="nav-item">Profile</Link>
// // // // // // // // // // // // // //             <Link to="/logout" className="nav-item">Logout</Link>
// // // // // // // // // // // // // //           </>
// // // // // // // // // // // // // //         ) : (
// // // // // // // // // // // // // //           <>
// // // // // // // // // // // // // //             <Link to="/" className="nav-item">Home</Link>
// // // // // // // // // // // // // //             <Link to="/about" className="nav-item">About</Link>
// // // // // // // // // // // // // //             <Link to="/contact" className="nav-item">Contact</Link>
// // // // // // // // // // // // // //             <Link to="/reviews" className="nav-item">Reviews</Link>
// // // // // // // // // // // // // //             <Link to="/blog" className="nav-item">Blog</Link>
// // // // // // // // // // // // // //             <Link to="/faqs" className="nav-item">FAQ</Link>
// // // // // // // // // // // // // //           </>
// // // // // // // // // // // // // //         )}
// // // // // // // // // // // // // //       </div>
// // // // // // // // // // // // // //     </nav>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // };

// // // // // // // // // // // // // // export default Navbar;
// // // // // // // // // // // // // import React, { useContext } from 'react';
// // // // // // // // // // // // // import '../styles/Navbar.css';
// // // // // // // // // // // // // import Logo from './Logo';
// // // // // // // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // // // // // // // import { UserContext } from '../../context/userContext';

// // // // // // // // // // // // // const Navbar = () => {
// // // // // // // // // // // // //   const { user, loading } = useContext(UserContext);

// // // // // // // // // // // // //   // If loading is true, show a loading message or a spinner
// // // // // // // // // // // // //   if (loading) {
// // // // // // // // // // // // //     return (
// // // // // // // // // // // // //       <nav className="navbar">
// // // // // // // // // // // // //         <Logo />
// // // // // // // // // // // // //         <div className="nav-links">
// // // // // // // // // // // // //           <span>Loading...</span> {/* Loading message */}
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </nav>
// // // // // // // // // // // // //     );
// // // // // // // // // // // // //   }

// // // // // // // // // // // // //   // When loading is false, render the actual navbar links based on user status
// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <nav className="navbar">
// // // // // // // // // // // // //       <Logo />
// // // // // // // // // // // // //       <div className="nav-links">
// // // // // // // // // // // // //         {user ? (
// // // // // // // // // // // // //           // If user is logged in, show the logged-in links
// // // // // // // // // // // // //           <>
// // // // // // // // // // // // //             <Link to="/dashboard" className="nav-item">Dashboard (Upload Image as Home)</Link>
// // // // // // // // // // // // //             <Link to="/history" className="nav-item">History</Link>
// // // // // // // // // // // // //             <Link to="/profile" className="nav-item">Profile</Link>
// // // // // // // // // // // // //             <Link to="/logout" className="nav-item">Logout</Link>
// // // // // // // // // // // // //           </>
// // // // // // // // // // // // //         ) : (
// // // // // // // // // // // // //           // If user is not logged in, show public links
// // // // // // // // // // // // //           <>
// // // // // // // // // // // // //             <Link to="/" className="nav-item">Home</Link>
// // // // // // // // // // // // //             <Link to="/about" className="nav-item">About</Link>
// // // // // // // // // // // // //             <Link to="/contact" className="nav-item">Contact</Link>
// // // // // // // // // // // // //             <Link to="/reviews" className="nav-item">Reviews</Link>
// // // // // // // // // // // // //             <Link to="/blog" className="nav-item">Blog</Link>
// // // // // // // // // // // // //             <Link to="/faqs" className="nav-item">FAQ</Link>
// // // // // // // // // // // // //           </>
// // // // // // // // // // // // //         )}
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </nav>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default Navbar;
// // // // // // // // // // // // import React, { useContext } from 'react';
// // // // // // // // // // // // import '../styles/Navbar.css';
// // // // // // // // // // // // import Logo from './Logo';
// // // // // // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // // // // // // import { UserContext } from '../../context/userContext';

// // // // // // // // // // // // const Navbar = () => {
// // // // // // // // // // // //   const { user, loading } = useContext(UserContext);

// // // // // // // // // // // //   // Show a loading state or public links while loading user data
// // // // // // // // // // // //   if (loading) {
// // // // // // // // // // // //     return (
// // // // // // // // // // // //       <nav className="navbar">
// // // // // // // // // // // //         <Logo />
// // // // // // // // // // // //         <div className="nav-links">
// // // // // // // // // // // //           <Link to="/" className="nav-item">Home</Link>
// // // // // // // // // // // //           <Link to="/about" className="nav-item">About</Link>
// // // // // // // // // // // //           <Link to="/contact" className="nav-item">Contact</Link>
// // // // // // // // // // // //           <Link to="/reviews" className="nav-item">Reviews</Link>
// // // // // // // // // // // //           <Link to="/blog" className="nav-item">Blog</Link>
// // // // // // // // // // // //           <Link to="/faqs" className="nav-item">FAQ</Link>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </nav>
// // // // // // // // // // // //     );
// // // // // // // // // // // //   }

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <nav className="navbar">
// // // // // // // // // // // //       <Logo />
// // // // // // // // // // // //       <div className="nav-links">
// // // // // // // // // // // //         {user ? (
// // // // // // // // // // // //           // If user is logged in, show user-specific links
// // // // // // // // // // // //           <>
// // // // // // // // // // // //             <Link to="/dashboard" className="nav-item">Dashboard (Upload Image as Home)</Link>
// // // // // // // // // // // //             <Link to="/history" className="nav-item">History</Link>
// // // // // // // // // // // //             <Link to="/profile" className="nav-item">Profile</Link>
// // // // // // // // // // // //             <Link to="/logout" className="nav-item">Logout</Link>
// // // // // // // // // // // //           </>
// // // // // // // // // // // //         ) : (
// // // // // // // // // // // //           // If user is not logged in, show public links
// // // // // // // // // // // //           <>
// // // // // // // // // // // //             <Link to="/" className="nav-item">Home</Link>
// // // // // // // // // // // //             <Link to="/about" className="nav-item">About</Link>
// // // // // // // // // // // //             <Link to="/contact" className="nav-item">Contact</Link>
// // // // // // // // // // // //             <Link to="/reviews" className="nav-item">Reviews</Link>
// // // // // // // // // // // //             <Link to="/blog" className="nav-item">Blog</Link>
// // // // // // // // // // // //             <Link to="/faqs" className="nav-item">FAQ</Link>
// // // // // // // // // // // //           </>
// // // // // // // // // // // //         )}
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </nav>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default Navbar;
// // // // // // // // // // // import React, { useContext } from 'react';
// // // // // // // // // // // import '../styles/Navbar.css';
// // // // // // // // // // // import Logo from './Logo';
// // // // // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // // // // // import { UserContext } from '../../context/userContext';

// // // // // // // // // // // const Navbar = () => {
// // // // // // // // // // //   const { user, loading } = useContext(UserContext);

// // // // // // // // // // //   // Show loading indicator or public links while loading user data
// // // // // // // // // // //   if (loading) {
// // // // // // // // // // //     return (
// // // // // // // // // // //       <nav className="navbar">
// // // // // // // // // // //         <Logo />
// // // // // // // // // // //         <div className="nav-links">
// // // // // // // // // // //           <Link to="/" className="nav-item">Home</Link>
// // // // // // // // // // //           <Link to="/about" className="nav-item">About</Link>
// // // // // // // // // // //           <Link to="/contact" className="nav-item">Contact</Link>
// // // // // // // // // // //           <Link to="/reviews" className="nav-item">Reviews</Link>
// // // // // // // // // // //           <Link to="/blog" className="nav-item">Blog</Link>
// // // // // // // // // // //           <Link to="/faqs" className="nav-item">FAQ</Link>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </nav>
// // // // // // // // // // //     );
// // // // // // // // // // //   }

// // // // // // // // // // //   return (
// // // // // // // // // // //     <nav className="navbar">
// // // // // // // // // // //       <Logo />
// // // // // // // // // // //       <div className="nav-links">
// // // // // // // // // // //         {user ? (
// // // // // // // // // // //           // If the user is logged in, show these links
// // // // // // // // // // //           <>
// // // // // // // // // // //             <Link to="/dashboard" className="nav-item">Dashboard (Upload Image as Home)</Link>
// // // // // // // // // // //             <Link to="/history" className="nav-item">History</Link>
// // // // // // // // // // //             <Link to="/profile" className="nav-item">Profile</Link>
// // // // // // // // // // //             <Link to="/logout" className="nav-item">Logout</Link>
// // // // // // // // // // //           </>
// // // // // // // // // // //         ) : (
// // // // // // // // // // //           // If the user is not logged in, show these public links
// // // // // // // // // // //           <>
// // // // // // // // // // //             <Link to="/" className="nav-item">Home</Link>
// // // // // // // // // // //             <Link to="/about" className="nav-item">About</Link>
// // // // // // // // // // //             <Link to="/contact" className="nav-item">Contact</Link>
// // // // // // // // // // //             <Link to="/reviews" className="nav-item">Reviews</Link>
// // // // // // // // // // //             <Link to="/blog" className="nav-item">Blog</Link>
// // // // // // // // // // //             <Link to="/faqs" className="nav-item">FAQ</Link>
// // // // // // // // // // //           </>
// // // // // // // // // // //         )}
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </nav>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default Navbar;
// // // // // // // // // // import React, { useContext } from 'react';
// // // // // // // // // // import '../styles/Navbar.css';
// // // // // // // // // // import Logo from './Logo';
// // // // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // // // // import { UserContext } from '../../context/userContext';
// // // // // // // // // // import { AdminContext } from '../../context/adminContext';

// // // // // // // // // // const Navbar = () => {
// // // // // // // // // //   const { user, loading: userLoading } = useContext(UserContext);
// // // // // // // // // //   const { admin } = useContext(AdminContext); // Admin doesn't need loading because it's less common to preload admin UI

// // // // // // // // // //   // Show public links while loading user info (optional)
// // // // // // // // // //   if (userLoading) {
// // // // // // // // // //     return (
// // // // // // // // // //       <nav className="navbar">
// // // // // // // // // //         <Logo />
// // // // // // // // // //         <div className="nav-links">
// // // // // // // // // //           <Link to="/" className="nav-item">Home</Link>
// // // // // // // // // //           <Link to="/about" className="nav-item">About</Link>
// // // // // // // // // //           <Link to="/contact" className="nav-item">Contact</Link>
// // // // // // // // // //           <Link to="/reviews" className="nav-item">Reviews</Link>
// // // // // // // // // //           <Link to="/blog" className="nav-item">Blog</Link>
// // // // // // // // // //           <Link to="/faqs" className="nav-item">FAQ</Link>
// // // // // // // // // //         </div>
// // // // // // // // // //       </nav>
// // // // // // // // // //     );
// // // // // // // // // //   }

// // // // // // // // // //   return (
// // // // // // // // // //     <nav className="navbar">
// // // // // // // // // //       <Logo />
// // // // // // // // // //       <div className="nav-links">
// // // // // // // // // //         {/* Admin logged in */}
// // // // // // // // // //         {admin ? (
// // // // // // // // // //           <>
// // // // // // // // // //             <Link to="/admindashboard" className="nav-item">Dashboard</Link>
// // // // // // // // // //             <Link to="/allusers" className="nav-item">Users</Link>
// // // // // // // // // //             <Link to="/admincontacts" className="nav-item">Contacts</Link>
// // // // // // // // // //             <Link to="/adminlogout" className="nav-item">Logout</Link>
// // // // // // // // // //           </>
// // // // // // // // // //         ) : user ? (
// // // // // // // // // //           // Regular user logged in
// // // // // // // // // //           <>
// // // // // // // // // //             <Link to="/history" className="nav-item">History</Link>
// // // // // // // // // //             <Link to="/contact" className="nav-item">Contact</Link>
// // // // // // // // // //             <Link to="/profile" className="nav-item">Profile</Link>
// // // // // // // // // //             <Link to="/logout" className="nav-item">Logout</Link>
// // // // // // // // // //           </>
// // // // // // // // // //         ) : (
// // // // // // // // // //           // No one logged in – public view
// // // // // // // // // //           <>
// // // // // // // // // //             <Link to="/" className="nav-item">Home</Link>
// // // // // // // // // //             <Link to="/about" className="nav-item">About</Link>
// // // // // // // // // //             <Link to="/contact" className="nav-item">Contact</Link>
// // // // // // // // // //             <Link to="/reviews" className="nav-item">Reviews</Link>
// // // // // // // // // //             <Link to="/blog" className="nav-item">Blog</Link>
// // // // // // // // // //             <Link to="/faqs" className="nav-item">FAQ</Link>
// // // // // // // // // //           </>
// // // // // // // // // //         )}
// // // // // // // // // //       </div>
// // // // // // // // // //     </nav>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default Navbar;
// // // // // // // // // import React, { useContext } from 'react';
// // // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // // // import Logo from './Logo';
// // // // // // // // // import '../styles/Navbar.css';

// // // // // // // // // import { UserContext } from '../../context/userContext';
// // // // // // // // // import { AdminContext } from '../../context/adminContext';

// // // // // // // // // const Navbar = () => {
// // // // // // // // //   const { user, loading: userLoading } = useContext(UserContext);
// // // // // // // // //   const { admin, loading: adminLoading } = useContext(AdminContext);

// // // // // // // // //   // Show nothing until both contexts are finished loading
// // // // // // // // //   if (userLoading || adminLoading) {
// // // // // // // // //     return null; // or a loading spinner
// // // // // // // // //   }

// // // // // // // // //   return (
// // // // // // // // //     <nav className="navbar">
// // // // // // // // //       <Logo />
// // // // // // // // //       <div className="nav-links">
// // // // // // // // //         {admin ? (
// // // // // // // // //           // ADMIN LOGGED IN
// // // // // // // // //           <>
// // // // // // // // //             <Link to="/admindashboard" className="nav-item">Dashboard</Link>
// // // // // // // // //             <Link to="/admin/users" className="nav-item">All Users</Link>
// // // // // // // // //             <Link to="/admin/contacts" className="nav-item">Contacts</Link>
// // // // // // // // //             <Link to="/adminlogout" className="nav-item">Logout</Link>
// // // // // // // // //           </>
// // // // // // // // //         ) : user ? (
// // // // // // // // //           // USER LOGGED IN
// // // // // // // // //           <>
// // // // // // // // //             <Link to="/dashboard" className="nav-item">Dashboard</Link>
// // // // // // // // //             <Link to="/history" className="nav-item">History</Link>
// // // // // // // // //             <Link to="/profile" className="nav-item">Profile</Link>
// // // // // // // // //             <Link to="/logout" className="nav-item">Logout</Link>
// // // // // // // // //           </>
// // // // // // // // //         ) : (
// // // // // // // // //           // PUBLIC VIEW (no one logged in)
// // // // // // // // //           <>
// // // // // // // // //             <Link to="/" className="nav-item">Home</Link>
// // // // // // // // //             <Link to="/about" className="nav-item">About</Link>
// // // // // // // // //             <Link to="/contact" className="nav-item">Contact</Link>
// // // // // // // // //             <Link to="/reviews" className="nav-item">Reviews</Link>
// // // // // // // // //             <Link to="/blog" className="nav-item">Blog</Link>
// // // // // // // // //             <Link to="/faqs" className="nav-item">FAQ</Link>
// // // // // // // // //           </>
// // // // // // // // //         )}
// // // // // // // // //       </div>
// // // // // // // // //     </nav>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default Navbar;
// // // // // // // // import React, { useContext } from 'react';
// // // // // // // // import '../styles/Navbar.css';
// // // // // // // // import Logo from './Logo';
// // // // // // // // import { Link } from 'react-router-dom';
// // // // // // // // import { UserContext } from '../../context/userContext';
// // // // // // // // import { AdminContext } from '../../context/adminContext';

// // // // // // // // const Navbar = () => {
// // // // // // // //   const { user, loading: userLoading } = useContext(UserContext);
// // // // // // // //   const { admin, loading: adminLoading } = useContext(AdminContext);

// // // // // // // //   // While loading either user or admin, show nothing or a loader
// // // // // // // //   if (userLoading || adminLoading) {
// // // // // // // //     return null; // or a loading spinner
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <nav className="navbar">
// // // // // // // //       <Logo />
// // // // // // // //       <div className="nav-links">
// // // // // // // //         {admin ? (
// // // // // // // //           // Admin is logged in
// // // // // // // //           <>
// // // // // // // //             <Link to="/admindashboard" className="nav-item">Admin Dashboard</Link>
// // // // // // // //             <Link to="/allusers" className="nav-item">Users</Link>
// // // // // // // //             <Link to="/adminprofile" className="nav-item">Profile</Link>
// // // // // // // //             <Link to="/adminlogout" className="nav-item">Logout</Link>
// // // // // // // //           </>
// // // // // // // //         ) : user ? (
// // // // // // // //           // Normal user is logged in
// // // // // // // //           <>
// // // // // // // //             <Link to="/dashboard" className="nav-item">Dashboard</Link>
// // // // // // // //             <Link to="/history" className="nav-item">History</Link>
// // // // // // // //             <Link to="/profile" className="nav-item">Profile</Link>
// // // // // // // //             <Link to="/logout" className="nav-item">Logout</Link>
// // // // // // // //           </>
// // // // // // // //         ) : (
// // // // // // // //           // No one is logged in — public navbar
// // // // // // // //           <>
// // // // // // // //             <Link to="/" className="nav-item">Home</Link>
// // // // // // // //             <Link to="/about" className="nav-item">About</Link>
// // // // // // // //             <Link to="/contact" className="nav-item">Contact</Link>
// // // // // // // //             <Link to="/reviews" className="nav-item">Reviews</Link>
// // // // // // // //             <Link to="/blog" className="nav-item">Blog</Link>
// // // // // // // //             <Link to="/faqs" className="nav-item">FAQ</Link>
// // // // // // // //           </>
// // // // // // // //         )}
// // // // // // // //       </div>
// // // // // // // //     </nav>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default Navbar;
// // // // // // // import React, { useContext } from "react";
// // // // // // // import "../styles/Navbar.css";
// // // // // // // import Logo from "./Logo";
// // // // // // // import { Link } from "react-router-dom";
// // // // // // // import { UserContext } from "../../context/userContext";
// // // // // // // import { AdminContext } from "../../context/adminContext";

// // // // // // // const Navbar = () => {
// // // // // // //   const { user, loading: userLoading } = useContext(UserContext);
// // // // // // //   const { admin, loading: adminLoading } = useContext(AdminContext);

// // // // // // //   // If either context is loading, don't show nav
// // // // // // //   if (userLoading || adminLoading) return null;

// // // // // // //   // ADMIN NAV
// // // // // // //   if (admin) {
// // // // // // //     return (
// // // // // // //       <nav className="navbar">
// // // // // // //         <Logo />
// // // // // // //         <div className="nav-links">
// // // // // // //           <Link to="/admindashboard" className="nav-item">Admin Dashboard</Link>
// // // // // // //           <Link to="/userhistory" className="nav-item">User History</Link>
// // // // // // //           <Link to="/admincontacts" className="nav-item">Contacts</Link>
// // // // // // //           <Link to="/adminprofile" className="nav-item">Profile</Link>
// // // // // // //           <Link to="/logout" className="nav-item">Logout</Link>
// // // // // // //         </div>
// // // // // // //       </nav>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   // USER NAV
// // // // // // //   if (user) {
// // // // // // //     return (
// // // // // // //       <nav className="navbar">
// // // // // // //         <Logo />
// // // // // // //         <div className="nav-links">
// // // // // // //           <Link to="/dashboard" className="nav-item">Dashboard</Link>
// // // // // // //           <Link to="/history" className="nav-item">History</Link>
// // // // // // //           <Link to="/profile" className="nav-item">Profile</Link>
// // // // // // //           <Link to="/logout" className="nav-item">Logout</Link>
// // // // // // //         </div>
// // // // // // //       </nav>
// // // // // // //     );
// // // // // // //   }

// // // // // // //   // PUBLIC NAV
// // // // // // //   return (
// // // // // // //     <nav className="navbar">
// // // // // // //       <Logo />
// // // // // // //       <div className="nav-links">
// // // // // // //         <Link to="/" className="nav-item">Home</Link>
// // // // // // //         <Link to="/about" className="nav-item">About</Link>
// // // // // // //         <Link to="/contact" className="nav-item">Contact</Link>
// // // // // // //         <Link to="/reviews" className="nav-item">Reviews</Link>
// // // // // // //         <Link to="/blog" className="nav-item">Blog</Link>
// // // // // // //         <Link to="/faqs" className="nav-item">FAQ</Link>
// // // // // // //       </div>
// // // // // // //     </nav>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default Navbar;
// // // // // // import React, { useContext } from 'react';
// // // // // // import '../styles/Navbar.css';
// // // // // // import Logo from './Logo';
// // // // // // import { Link } from 'react-router-dom';
// // // // // // import { UserContext } from '../../context/userContext';
// // // // // // import { AdminContext } from '../../context/adminContext';

// // // // // // const Navbar = () => {
// // // // // //   const { user, loading: userLoading } = useContext(UserContext);
// // // // // //   const { admin, loading: adminLoading } = useContext(AdminContext);

// // // // // //   if (userLoading || adminLoading) {
// // // // // //     return <div className="navbar">Loading...</div>;
// // // // // //   }

// // // // // //   return (
// // // // // //     <nav className="navbar">
// // // // // //       <Logo />
// // // // // //       <div className="nav-links">
// // // // // //         {admin ? (
// // // // // //           // Admin is logged in
// // // // // //           <>
// // // // // //             <Link to="/admindashboard" className="nav-item">Admin Dashboard</Link>
// // // // // //             <Link to="/contacts" className="nav-item">Contacts</Link>
// // // // // //             <Link to="/logout" className="nav-item">Logout</Link>
// // // // // //           </>
// // // // // //         ) : user ? (
// // // // // //           // User is logged in
// // // // // //           <>
// // // // // //             <Link to="/dashboard" className="nav-item">Dashboard</Link>
// // // // // //             <Link to="/history" className="nav-item">History</Link>
// // // // // //             <Link to="/profile" className="nav-item">Profile</Link>
// // // // // //             <Link to="/logout" className="nav-item">Logout</Link>
// // // // // //           </>
// // // // // //         ) : (
// // // // // //           // Public (not logged in)
// // // // // //           <>
// // // // // //             <Link to="/" className="nav-item">Home</Link>
// // // // // //             <Link to="/about" className="nav-item">About</Link>
// // // // // //             <Link to="/contact" className="nav-item">Contact</Link>
// // // // // //             <Link to="/reviews" className="nav-item">Reviews</Link>
// // // // // //             <Link to="/blog" className="nav-item">Blog</Link>
// // // // // //             <Link to="/faqs" className="nav-item">FAQ</Link>
// // // // // //           </>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </nav>
// // // // // //   );
// // // // // // };

// // // // // // export default Navbar;
// // // // // import React, { useContext } from 'react';
// // // // // import { Link } from 'react-router-dom';
// // // // // import { UserContext } from '../../context/userContext';
// // // // // import { AdminContext } from '../../context/adminContext';
// // // // // import Logo from './Logo';
// // // // // import '../styles/Navbar.css';

// // // // // const Navbar = () => {
// // // // //   // Fetch user and admin context values
// // // // //   const { user, loading: userLoading } = useContext(UserContext);
// // // // //   const { admin, loading: adminLoading } = useContext(AdminContext);

// // // // //   // Show loading state while fetching user/admin info
// // // // //   if (userLoading || adminLoading) {
// // // // //     return <div className="navbar">Loading...</div>;
// // // // //   }

// // // // //   return (
// // // // //     <nav className="navbar">
// // // // //       <Logo />
// // // // //       <div className="nav-links">
// // // // //         {admin ? (
// // // // //           // Admin is logged in
// // // // //           <>
// // // // //             <Link to="/admindashboard" className="nav-item">Admin Dashboard</Link>
// // // // //             <Link to="/contacts" className="nav-item">Contacts</Link>
// // // // //             <Link to="/logout" className="nav-item">Logout</Link>
// // // // //           </>
// // // // //         ) : user ? (
// // // // //           // User is logged in
// // // // //           <>
// // // // //             <Link to="/dashboard" className="nav-item">Dashboard</Link>
// // // // //             <Link to="/history" className="nav-item">History</Link>
// // // // //             <Link to="/profile" className="nav-item">Profile</Link>
// // // // //             <Link to="/logout" className="nav-item">Logout</Link>
// // // // //           </>
// // // // //         ) : (
// // // // //           // Public (not logged in)
// // // // //           <>
// // // // //             <Link to="/" className="nav-item">Home</Link>
// // // // //             <Link to="/about" className="nav-item">About</Link>
// // // // //             <Link to="/contact" className="nav-item">Contact</Link>
// // // // //             <Link to="/reviews" className="nav-item">Reviews</Link>
// // // // //             <Link to="/blog" className="nav-item">Blog</Link>
// // // // //             <Link to="/faqs" className="nav-item">FAQ</Link>
// // // // //           </>
// // // // //         )}
// // // // //       </div>
// // // // //     </nav>
// // // // //   );
// // // // // };

// // // // // export default Navbar;
// // // // import React, { useContext } from 'react';
// // // // import '../styles/Navbar.css';
// // // // import Logo from './Logo';
// // // // import { Link } from 'react-router-dom';
// // // // import { UserContext } from '../../context/userContext';
// // // // import { AdminContext } from '../../context/adminContext';

// // // // const Navbar = () => {
// // // //   const { user, loading: userLoading } = useContext(UserContext);
// // // //   const { admin, loading: adminLoading } = useContext(AdminContext);

// // // //   // Show minimal navbar or loading state while authentication status is being checked
// // // //   if (userLoading || adminLoading) {
// // // //     return (
// // // //       <nav className="navbar">
// // // //         <Logo />
// // // //         <div className="nav-links">
// // // //           <Link to="/" className="nav-item">Home</Link>
// // // //           <Link to="/about" className="nav-item">About</Link>
// // // //           <Link to="/contact" className="nav-item">Contact</Link>
// // // //         </div>
// // // //       </nav>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <nav className="navbar">
// // // //       <Logo />
// // // //       <div className="nav-links">
// // // //         {admin ? (
// // // //           // Admin is logged in
// // // //           <>
// // // //             <Link to="/admindashboard" className="nav-item">Admin Dashboard</Link>
// // // //             <Link to="/contacts" className="nav-item">Contacts</Link>
// // // //             <Link to="/logout" className="nav-item">Logout</Link>
// // // //           </>
// // // //         ) : user ? (
// // // //           // User is logged in
// // // //           <>
// // // //             <Link to="/dashboard" className="nav-item">Dashboard</Link>
// // // //             <Link to="/history" className="nav-item">History</Link>
// // // //             <Link to="/profile" className="nav-item">Profile</Link>
// // // //             <Link to="/logout" className="nav-item">Logout</Link>
// // // //           </>
// // // //         ) : (
// // // //           // Public (not logged in)
// // // //           <>
// // // //             <Link to="/" className="nav-item">Home</Link>
// // // //             <Link to="/about" className="nav-item">About</Link>
// // // //             <Link to="/contact" className="nav-item">Contact</Link>
// // // //             <Link to="/reviews" className="nav-item">Reviews</Link>
// // // //             <Link to="/blog" className="nav-item">Blog</Link>
// // // //             <Link to="/faqs" className="nav-item">FAQ</Link>
// // // //           </>
// // // //         )}
// // // //       </div>
// // // //     </nav>
// // // //   );
// // // // };

// // // // export default Navbar;
// // // import React from 'react';
// // // import '../styles/Navbar.css';
// // // import Logo from './Logo';
// // // import { Link } from 'react-router-dom';
// // // import { useAuth } from '../context/AuthWrapper';
// // // console.log('User loading:', userLoading, 'User:', user);
// // // console.log('Admin loading:', adminLoading, 'Admin:', admin);
// // // const Navbar = () => {
// // //   const { isAdmin, isUser, isLoading } = useAuth();

// // //   // Show public navbar while loading
// // //   if (isLoading) {
// // //     return (
// // //       <nav className="navbar">
// // //         <Logo />
// // //         <div className="nav-links">
// // //           <Link to="/" className="nav-item">Home</Link>
// // //           <Link to="/about" className="nav-item">About</Link>
// // //           <Link to="/contact" className="nav-item">Contact</Link>
// // //         </div>
// // //       </nav>
// // //     );
// // //   }

// // //   return (
// // //     <nav className="navbar">
// // //       <Logo />
// // //       <div className="nav-links">
// // //         {isAdmin ? (
// // //           // Admin navbar
// // //           <>
// // //             <Link to="/admindashboard" className="nav-item">Admin Dashboard</Link>
// // //             <Link to="/contacts" className="nav-item">Contacts</Link>
// // //             <Link to="/logout" className="nav-item">Logout</Link>
// // //           </>
// // //         ) : isUser ? (
// // //           // User navbar
// // //           <>
// // //             <Link to="/dashboard" className="nav-item">Dashboard</Link>
// // //             <Link to="/history" className="nav-item">History</Link>
// // //             <Link to="/profile" className="nav-item">Profile</Link>
// // //             <Link to="/logout" className="nav-item">Logout</Link>
// // //           </>
// // //         ) : (
// // //           // Public navbar
// // //           <>
// // //             <Link to="/" className="nav-item">Home</Link>
// // //             <Link to="/about" className="nav-item">About</Link>
// // //             <Link to="/contact" className="nav-item">Contact</Link>
// // //             <Link to="/reviews" className="nav-item">Reviews</Link>
// // //             <Link to="/blog" className="nav-item">Blog</Link>
// // //             <Link to="/faqs" className="nav-item">FAQ</Link>
// // //           </>
// // //         )}
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;
// // import React, { useContext, useEffect } from 'react';
// // import '../styles/Navbar.css';
// // import Logo from './Logo';
// // import { Link } from 'react-router-dom';
// // import { UserContext } from '../../context/userContext';
// // import { AdminContext } from '../../context/adminContext';

// // const Navbar = () => {
// //   const { user, loading: userLoading } = useContext(UserContext);
// //   const { admin, loading: adminLoading } = useContext(AdminContext);

// //   useEffect(() => {
// //     console.log("[Navbar] user:", user);
// //     console.log("[Navbar] admin:", admin);
// //     console.log("[Navbar] userLoading:", userLoading, "adminLoading:", adminLoading);
// //   }, [user, admin, userLoading, adminLoading]);

// //   if (userLoading || adminLoading) {
// //     return <div className="navbar">Loading...</div>;
// //   }

// //   return (
// //     <nav className="navbar">
// //       <Logo />
// //       <div className="nav-links">
// //         {admin ? (
// //           <>
// //             <Link to="/admindashboard" className="nav-item">Admin Dashboard</Link>
// //             <Link to="/contacts" className="nav-item">Contacts</Link>
// //             <Link to="/logout" className="nav-item">Logout</Link>
// //           </>
// //         ) : user ? (
// //           <>
// //             <Link to="/dashboard" className="nav-item">Dashboard</Link>
// //             <Link to="/history" className="nav-item">History</Link>
// //             <Link to="/profile" className="nav-item">Profile</Link>
// //             <Link to="/logout" className="nav-item">Logout</Link>
// //           </>
// //         ) : (
// //           <>
// //             <Link to="/" className="nav-item">Home</Link>
// //             <Link to="/about" className="nav-item">About</Link>
// //             <Link to="/contact" className="nav-item">Contact</Link>
// //             <Link to="/reviews" className="nav-item">Reviews</Link>
// //             <Link to="/blog" className="nav-item">Blog</Link>
// //             <Link to="/faqs" className="nav-item">FAQ</Link>
// //           </>
// //         )}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;
// import React, { useContext, useEffect } from 'react';
// import '../styles/Navbar.css';
// import Logo from './Logo';
// import { Link } from 'react-router-dom';
// import { UserContext } from '../../context/userContext';
// import { AdminContext } from '../../context/adminContext';

// const Navbar = () => {
//   const { user, loading: userLoading } = useContext(UserContext);
//   const { admin, loading: adminLoading } = useContext(AdminContext);

//   useEffect(() => {
//     console.log("[Navbar] user:", user);
//     console.log("[Navbar] admin:", admin);
//     console.log("[Navbar] userLoading:", userLoading, "adminLoading:", adminLoading);
//   }, [user, admin, userLoading, adminLoading]);

//   if (userLoading || adminLoading) {
//     return <div className="navbar">Loading...</div>;
//   }

//   return (
//     <nav className="navbar">
//       <Logo />
//       <div className="nav-links">
//         {admin ? (
//           <>
//             <Link to="/admindashboard" className="nav-item">Admin Dashboard</Link>
//             <Link to="/contacts" className="nav-item">Contacts</Link>
//             <Link to="/logout" className="nav-item">Logout</Link>
//           </>
//         ) : user ? (
//           <>
//             <Link to="/dashboard" className="nav-item">Dashboard</Link>
//             <Link to="/history" className="nav-item">History</Link>
//             <Link to="/profile" className="nav-item">Profile</Link>
//             <Link to="/logout" className="nav-item">Logout</Link>
//           </>
//         ) : (
//           <>
//             <Link to="/" className="nav-item">Home</Link>
//             <Link to="/about" className="nav-item">About</Link>
//             <Link to="/contact" className="nav-item">Contact</Link>
//             <Link to="/reviews" className="nav-item">Reviews</Link>
//             <Link to="/blog" className="nav-item">Blog</Link>
//             <Link to="/faqs" className="nav-item">FAQ</Link>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useContext } from 'react';
import '../styles/Navbar.css';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/userContext';
import { AdminContext } from '../../context/adminContext';

const Navbar = () => {
  const { user, loading: userLoading } = useContext(UserContext);
  const { admin, loading: adminLoading } = useContext(AdminContext);

  console.log("[Navbar] user:", user);
  console.log("[Navbar] admin:", admin);
  console.log("[Navbar] userLoading:", userLoading, "adminLoading:", adminLoading);

  if (userLoading || adminLoading) {
    return <div className="navbar">Loading...</div>;
  }

  return (
    <nav className="navbar">
      <Logo />
      <div className="nav-links">
        {admin ? (
          <>
            <Link to="/admindashboard" className="nav-item">Admin Dashboard</Link>
            <Link to="/contacts" className="nav-item">Contacts</Link>
            <Link to="/" className="nav-item">Logout</Link>
          </>
        ) : user ? (
          <>
            <Link to="/dashboard" className="nav-item">Dashboard</Link>
            <Link to="/userhistory" className="nav-item">History</Link>
            <Link to="/profile" className="nav-item">Profile</Link>
            <Link to="/" className="nav-item">Logout</Link>
          </>
        ) : (
          <>
            <Link to="/" className="nav-item">Home</Link>
            <Link to="/about" className="nav-item">About</Link>
            <Link to="/contact" className="nav-item">Contact Us</Link>
            <Link to="/reviews" className="nav-item">Reviews</Link>
            <Link to="/blog" className="nav-item">Blog</Link>
            <Link to="/faqs" className="nav-item">FAQ</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
