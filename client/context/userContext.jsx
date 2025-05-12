// // import axios from 'axios'
// // import {createContext,useState,useEffect} from 'react';

// // export const UserContext =createContext({})

// // export function UserContextProvider({children}){
// //     const [user,setUser] =useState(null);
// //     useEffect(()=> {
// //         if(!user){
// //             axios.get('/profile').then(({data})=>{
// //                 setUser(data)
// //             })
// //         }
// //     },[]);
// //     return(
// //         <UserContext.Provider value={{user,setUser}}>
// //             {children}
// //         </UserContext.Provider>

// //     )
// // }
// import axios from 'axios'
// import { createContext, useState, useEffect } from 'react';

// export const UserContext = createContext({});

// export function UserContextProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get('http://localhost:8000/api/auth/profile', { withCredentials: true })
//       .then(({ data }) => {
//         setUser(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Error fetching profile:', err);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <UserContext.Provider value={{ user, setUser, loading }}>
//       {children}
//     </UserContext.Provider>
//   );
// }
import axios from 'axios'
import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/auth/profile', { withCredentials: true })
      .then(({ data }) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching profile:', err);
        setLoading(false);
      });
  }, []);

  // Function to handle logout
  const logout = async () => {
    try {
      await axios.post('http://localhost:8000/api/auth/logout', {}, { withCredentials: true });
      setUser(null);  // Clear the user data
    } catch (err) {
      console.error("Logout error:", err);
    }
  };

  return (
    <UserContext.Provider value={{ user, setUser, loading, logout }}>
      {children}
    </UserContext.Provider>
  );
}
