// // // import {useState} from "react";
// // // import axios from 'axios';
// // // import {toast} from 'react-hot-toast';
// // // import {useNavigate} from 'react-router-dom'

// // // export default function Register() {
// // //   const navigate = useNavigate()
// // //   const [data,setData]=useState({
// // //     name: '',
// // //     email: '',
// // //     password: '',
// // //   })
// // //   const registeruser=async (e)=>{
// // //     e.preventDefault()
// // //     const {name,email,password}=data
// // //     try{
// // //       const {data}=await axios.post('/register',{
// // //         name,email,password
// // //       })
// // //       if(data.error){
// // //         toast.error(data.error)
// // //       }else{
// // //         setData({})
// // //         toast.success('Login Successful.Welcome!')
// // //         navigate('/login')
// // //       }
// // //     }catch(error){
// // //       console.log(error)
// // //     }
// // //   }
// // //   return (
// // //     <div>
// // //       <form onSubmit={registeruser}>
// // //         <label>Name</label>
// // //         <input type='text' placeholder='enter name...' value={data.name} onChange={(e)=> setData({...data,name: e.target.value})}/>
// // //         <label>Email</label>
// // //         <input type='text' placeholder='enter email...' value={data.email} onChange={(e)=> setData({...data,email: e.target.value})}/>
// // //         <label>Password</label>
// // //         <input type='password' placeholder='enter password...' value={data.password} onChange={(e)=> setData({...data,password: e.target.value})}/>
// // //         <button type='submit'>Submit</button>
// // //       </form>
// // //     </div>
// // //   )
// // // }
// // import { useState } from "react";
// // import axios from "axios";
// // import { toast } from "react-hot-toast";
// // import { useNavigate } from "react-router-dom";

// // export default function Register() {
// //   const navigate = useNavigate();
// //   const [data, setData] = useState({
// //     name: "",
// //     email: "",
// //     password: "",
// //   });

// //   const registerUser = async (e) => {
// //     e.preventDefault();
// //     const { name, email, password } = data;

// //     try {
// //       const response = await axios.post("http://localhost:4000/register", {
// //         name,
// //         email,
// //         password,
// //       });

// //       if (response.data.error) {
// //         toast.error(response.data.error);
// //       } else {
// //         setData({ name: "", email: "", password: "" }); // Clear form
// //         toast.success("Registration Successful! Please log in.");
// //         navigate("/login");
// //       }
// //     } catch (error) {
// //       console.error("Registration Error:", error);
// //       toast.error("Registration failed. Please try again.");
// //     }
// //   };

// //   return (
// //     <div>
// //       <form onSubmit={registerUser}>
// //         <label>Name</label>
// //         <input
// //           type="text"
// //           placeholder="Enter name..."
// //           value={data.name}
// //           onChange={(e) => setData({ ...data, name: e.target.value })}
// //           required
// //         />

// //         <label>Email</label>
// //         <input
// //           type="email"
// //           placeholder="Enter email..."
// //           value={data.email}
// //           onChange={(e) => setData({ ...data, email: e.target.value })}
// //           required
// //         />

// //         <label>Password</label>
// //         <input
// //           type="password"
// //           placeholder="Enter password..."
// //           value={data.password}
// //           onChange={(e) => setData({ ...data, password: e.target.value })}
// //           required
// //         />

// //         <button type="submit">Submit</button>
// //       </form>
// //     </div>
// //   );
// // }
// const registerUser = async (req, res) => {
//   try {
//     const { name, email, password } = req.body;

//     // Check if request body is received
//     if (!name || !email || !password) {
//       return res.status(400).json({ error: 'All fields are required' });
//     }

//     // Check if email already exists
//     const exist = await User.findOne({ email });
//     if (exist) return res.status(400).json({ error: 'Email is already taken' });

//     // Hash Password
//     const hashedPassword = await hashPassword(password);

//     // Create User
//     const user = new User({
//       name,
//       email,
//       password: hashedPassword,
//     });
//     await user.save(); // Save user

//     // Generate JWT Token
//     const token = jwt.sign(
//       { email: user.email, id: user._id, name: user.name },
//       process.env.JWT_SECRET,
//       { expiresIn: '7d' }
//     );

//     res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'Strict' });
//     res.status(201).json({ message: 'User registered successfully', user });
//   } catch (error) {
//     console.error('Registration Error:', error);
//     res.status(500).json({ error: 'Registration failed' });
//   }
// };
import { useState } from "react";
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const { name, email, password } = data;
      if (!name || !email || !password) {
        toast.error("All fields are required!");
        return;
      }

      //const response = await axios.post('/register', { name, email, password });
      const response = await axios.post('http://localhost:8000/register', {
        name,
        email,
        password,
      });
      
      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.success('Registration successful! Redirecting...');
        localStorage.setItem('token', response.data.token); 
        setData({ name: '', email: '', password: '' }); // Reset form
        navigate('/login');
      }
    } catch (error) {
      console.error('Registration Error:', error.response?.data || error.message);
      toast.error(error.response?.data?.error || 'Registration failed');
    }
  };

  return (
    <div>
      <form onSubmit={registerUser}>
        <label>Name</label>
        <input type="text" placeholder="Enter name..." value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} required />

        <label>Email</label>
        <input type="email" placeholder="Enter email..." value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} required />

        <label>Password</label>
        <input type="password" placeholder="Enter password..." value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
