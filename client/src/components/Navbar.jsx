// import {Link} from 'react-router-dom'

// export default function Navbar() {
//   return (
//     <nav>
//       <Link to='/'>Home </Link>
//       <Link to='/register'>Register </Link>
//       <Link to='/login'>Login </Link>
//     </nav>
//   )
// }
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Create a CSS file for styling

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="nav-link">Anomaly Detection</Link>
      </div>
      <div className="nav-links">
        <Link to="/register" className="nav-link">Register</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </div>
    </nav>
  );
}