// // import axios from 'axios'
// // import { createContext, useState, useEffect } from 'react';

// // export const UserContext = createContext({});

// // export function UserContextProvider({ children }) {
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   const fetchProfile = async () => {
// //     try {
// //       setLoading(true);
// //       const { data } = await axios.get("http://localhost:8000/api/auth/profile", {
// //         withCredentials: true,
// //       });
// //       setUser(data);
// //     } catch (err) {
// //       console.error("Error fetching profile:", err);
// //       setUser(null);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchProfile(); // Run on initial mount
// //   }, []);

// //   const logout = async () => {
// //     await axios.post("http://localhost:8000/api/auth/logout", {}, { withCredentials: true });
// //     setUser(null);
// //   };

// //   return (
// //     <UserContext.Provider value={{ user, setUser, loading, logout, fetchProfile }}>
// //       {children}
// //     </UserContext.Provider>
// //   );
// // }
// import axios from 'axios';
// import { createContext, useState, useEffect } from 'react';

// export const UserContext = createContext({});

// export function UserContextProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const fetchProfile = async () => {
//     try {
//       setLoading(true);
//       const token = localStorage.getItem("token");
//       const { data } = await axios.get("https://anomaly-detection-production-7004.up.railway.app/api/auth/profile", {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setUser(data);
//     } catch (err) {
//       console.error("Error fetching profile:", err);
//       setUser(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProfile(); // Run on initial mount
//   }, []);

//   const logout = async () => {
//     const token = localStorage.getItem("token");
//     await axios.post("https://anomaly-detection-production-7004.up.railway.app/api/auth/logout", {}, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     localStorage.removeItem("token");
//     setUser(null);
//   };

//   return (
//     <UserContext.Provider value={{ user, setUser, loading, logout, fetchProfile }}>
//       {children}
//     </UserContext.Provider>
//   );
// }
import axios from 'axios';
import { createContext, useState, useEffect, useCallback } from 'react';

// Create a configured Axios instance
const api = axios.create({
  baseURL: 'https://anomaly-detection-production-7004.up.railway.app/api',
  withCredentials: true, // If using cookies
});

export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProfile = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const token = localStorage.getItem("token");
      
      if (!token) {
        setUser(null);
        return;
      }

      const { data } = await api.get("/auth/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(data);
    } catch (err) {
      console.error("Error fetching profile:", err);
      setError(err.response?.data?.message || "Failed to fetch profile");
      setUser(null);
      
      // Clear token if it's invalid
      if (err.response?.status === 401) {
        localStorage.removeItem("token");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        await api.post("/auth/logout", {}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      }
    } catch (err) {
      console.error("Logout error:", err);
    } finally {
      localStorage.removeItem("token");
      setUser(null);
    }
  }, []);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return (
    <UserContext.Provider value={{ 
      user, 
      setUser, 
      loading, 
      error,
      logout, 
      fetchProfile,
      isAuthenticated: !!user 
    }}>
      {children}
    </UserContext.Provider>
  );
}