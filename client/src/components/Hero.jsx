// // // components/Hero.js
// // import React from 'react';
// // import './Hero.css';
// // import VideoShowcase from './VideoShowcase';
// // const Hero = () => {
// //   return (
// //     <section className="hero">
// //       <h1 className="hero-title">Smart Anomaly Detection with AI-Powered Precision</h1>
// //       <p className="hero-subtitle">Enhancing Industrial Quality with Synthetic Data & AI-driven Insights.</p>
// //       <p className="no-credit">Visualizing Anomalies, Optimizing Performance</p>
      
// //       <VideoShowcase />
// //     </section>
// //   );
// // };

// // export default Hero;
// import React from 'react';
// import './Hero.css';
// import { useNavigate } from 'react-router-dom';
// import VideoShowcase from './VideoShowcase';

// const Hero = () => {
//   const navigate = useNavigate();

//   return (
//     <section className="hero">
//       <h1 className="hero-title">Smart Anomaly Detection with AI-Powered Precision</h1>
//       <p className="hero-subtitle">Enhancing Industrial Quality with Synthetic Data & AI-driven Insights.</p>
//       <p className="no-credit">Visualizing Anomalies, Optimizing Performance</p>

//       <div className="login-boxes">
//         {/* User Login Box */}
//         <div className="login-box user-box">
//           <h2>User Login</h2>
//           <button onClick={() => navigate('/login')}>Login as User</button>
//           <p>
//             Don't have an account?{' '}
//             <span className="signup-link" onClick={() => navigate('/register')}>
//               Sign up
//             </span>
//           </p>
//         </div>

//         {/* Admin Login Box */}
//         <div className="login-box admin-box">
//           <h2>Admin Login</h2>
//           <button onClick={() => navigate('/adminlogin')}>Login as Admin</button>
//           <p>
//             Don't have an account?{' '}
//             <span className="signup-link" onClick={() => navigate('/adminregister')}>
//               Sign up
//             </span>
//           </p>
//         </div>
//       </div>

//       <VideoShowcase />
//     </section>
//   );
// };

// export default Hero;
import React from 'react';
import './Hero.css';
import VideoShowcase from './VideoShowcase';

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="hero-title">Smart Anomaly Detection with AI-Powered Precision</h1>
      <p className="hero-subtitle">Ensuring quality, one part at a time.</p>
      {/* <p className="no-credit">Visualizing Anomalies, Optimizing Performance</p> */}

      <div className="login-boxes">
        {/* User Login Box */}
        <div className="login-box user-box">
          <h2>User Login</h2>
          <button onClick={() => window.location.href = '/login'}>Login as User</button>
        </div>

        {/* Admin Login Box */}
        <div className="login-box admin-box">
          <h2>Admin Login</h2>
          <button onClick={() => window.location.href = '/adminlogin'}>Login as Admin</button>
        </div>
      </div>

      <VideoShowcase />
    </section>
  );
};

export default Hero;