// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'
// // import {Routes,Route} from 'react-router-dom';
// // import Navbar from '../src/components/Navbar';
// // import Home from './pages/Home'
// // import Register from './pages/Register'
// // import Login from './pages/Login'
// // import axios from 'axios';
// // import {Toaster} from 'react-hot-toast'
// // import {UserContextProvider} from '../context/userContext';
// // import Dashboard from './pages/Dashboard';

// // axios.defaults.baseURL='http://localhost:8000'
// // axios.defaults.withCredentials=true

// // function App() {
  
// //   return (
// //     <UserContextProvider>
// //     <>
// //       <Navbar/>
// //       <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
// //       <Routes>
// //       <Route path='/' element={<Home/>} />
// //       <Route path='/register' element={<Register/>} />
// //       <Route path='/login' element={<Login/>} />
// //       <Route path="/dashboard" element={<Dashboard/>} />
// //       </Routes>
// //     </>
// //     </UserContextProvider>
// //   );
// // }

// // export default App
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from '../src/components/Navbar';
// import Hero from '../src/components/Hero';
// import Register from '../src/pages/Register';
// import Login from '../src/pages/Login';
// import Dashboard from '../src/pages/Dashboard';
// import { Toaster } from 'react-hot-toast';
// import { UserContextProvider } from '../context/userContext';
// import axios from 'axios';
// import '../src/styles/App.css';

// axios.defaults.baseURL = 'http://localhost:8000';
// axios.defaults.withCredentials = true;

// function App() {
//   return (
//     <UserContextProvider>
//       <Router>
//         <div className="App">
//           <Navbar />
//           <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
//           <Routes>
//             <Route path="/" element={<Hero />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//           </Routes>
//         </div>
//       </Router>
//     </UserContextProvider>
//   );
// }

// export default App;
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Register from '../src/pages/Register';
import Login from '../src/pages/Login';
import Dashboard from '../src/pages/Dashboard';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from '../context/userContext';
import axios from 'axios';
import '../src/styles/App.css';

axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Navbar />
        <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </UserContextProvider>
  );
}

export default App;