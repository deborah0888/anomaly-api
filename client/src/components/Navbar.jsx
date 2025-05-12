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
                        <div className="profile-dropdown">
              <div className="profile-trigger">
                <svg
                  className="user-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="7" r="4" />
                  <path d="M4 20c1.2-4.5 6-5.5 8-5.5s6.8 1 8 5.5" />
                </svg>
                <span className="profile-name">{admin?.name || "User"}</span>
              </div>
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <strong>Name:</strong> {admin?.name || "Admin"}
                </div>
                <div className="dropdown-item">
                  <strong>Email:</strong> {admin?.email || "No email"}
                </div>
              </div>
            </div>


            <Link to="/" className="nav-item">Logout</Link>
          </>
        ) : user ? (
          <>
            <Link to="/dashboard" className="nav-item">Dashboard</Link>
            <Link to="/history" className="nav-item">History</Link>
            {/* <Link to="/profile" className="nav-item">Profile</Link> */}
            <div className="profile-dropdown">
              <div className="profile-trigger">
                <svg
                  className="user-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="7" r="4" />
                  <path d="M4 20c1.2-4.5 6-5.5 8-5.5s6.8 1 8 5.5" />
                </svg>
                <span className="profile-name">{user?.name || "User"}</span>
              </div>
              <div className="dropdown-content">
                <div className="dropdown-item">
                  <strong>Name:</strong> {user?.name || "User"}
                </div>
                <div className="dropdown-item">
                  <strong>Email:</strong> {user?.email || "No email"}
                </div>
              </div>
            </div>



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
