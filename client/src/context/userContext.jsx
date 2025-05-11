// // // // // // // // // // // // // // import { createContext, useState, useEffect } from "react";

// // // // // // // // // // // // // // export const UserContext = createContext();

// // // // // // // // // // // // // // export function UserContextProvider({ children }) {
// // // // // // // // // // // // // //   const [user, setUser] = useState(null);

// // // // // // // // // // // // // //   // Fetch user profile when app starts (checks if user is logged in)
// // // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // // //     fetch("http://localhost:4000/profile", {
// // // // // // // // // // // // // //       credentials: "include", // Ensures cookies are sent
// // // // // // // // // // // // // //     })
// // // // // // // // // // // // // //       .then((res) => res.json())
// // // // // // // // // // // // // //       .then((data) => {
// // // // // // // // // // // // // //         if (data.id) {
// // // // // // // // // // // // // //           setUser(data);
// // // // // // // // // // // // // //         }
// // // // // // // // // // // // // //       })
// // // // // // // // // // // // // //       .catch((err) => console.error("Auth Error:", err));
// // // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // // //   return (
// // // // // // // // // // // // // //     <UserContext.Provider value={{ user, setUser }}>
// // // // // // // // // // // // // //       {children}
// // // // // // // // // // // // // //     </UserContext.Provider>
// // // // // // // // // // // // // //   );
// // // // // // // // // // // // // // }
// // // // // // // // // // // // // import { createContext, useState, useEffect } from "react";
// // // // // // // // // // // // // import axios from "axios";

// // // // // // // // // // // // // export const UserContext = createContext();

// // // // // // // // // // // // // export function UserContextProvider({ children }) {
// // // // // // // // // // // // //   const [user, setUser] = useState(null);

// // // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // // //     axios
// // // // // // // // // // // // //       .get("http://localhost:4000/profile", { withCredentials: true })
// // // // // // // // // // // // //       .then((res) => {
// // // // // // // // // // // // //         if (res.data.id) {
// // // // // // // // // // // // //           setUser(res.data);
// // // // // // // // // // // // //         } else {
// // // // // // // // // // // // //           setUser(null);
// // // // // // // // // // // // //         }
// // // // // // // // // // // // //       })
// // // // // // // // // // // // //       .catch((err) => console.error("Auth Error:", err));
// // // // // // // // // // // // //   }, []);

// // // // // // // // // // // // //   return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
// // // // // // // // // // // // // }
// // // // // // // // // // // // import { createContext, useState, useEffect } from "react";
// // // // // // // // // // // // import axios from "axios";

// // // // // // // // // // // // export const UserContext = createContext();

// // // // // // // // // // // // export function UserContextProvider({ children }) {
// // // // // // // // // // // //   const [user, setUser] = useState(null);

// // // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // // //     const fetchUser = async () => {
// // // // // // // // // // // //       try {
// // // // // // // // // // // //         const res = await axios.get("http://localhost:4000/profile", { withCredentials: true });
// // // // // // // // // // // //         if (res.data.id) {
// // // // // // // // // // // //           setUser(res.data);
// // // // // // // // // // // //         } else {
// // // // // // // // // // // //           setUser(null);
// // // // // // // // // // // //         }
// // // // // // // // // // // //       } catch (err) {
// // // // // // // // // // // //         console.error("Auth Error:", err);
// // // // // // // // // // // //         setUser(null);
// // // // // // // // // // // //       }
// // // // // // // // // // // //     };

// // // // // // // // // // // //     fetchUser();
// // // // // // // // // // // //   }, []);

// // // // // // // // // // // //   return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
// // // // // // // // // // // // }
// // // // // // // // // // // import { createContext, useState, useEffect } from "react";
// // // // // // // // // // // import axios from "axios";

// // // // // // // // // // // export const UserContext = createContext();

// // // // // // // // // // // export function UserContextProvider({ children }) {
// // // // // // // // // // //   const [user, setUser] = useState(null);

// // // // // // // // // // //   useEffect(() => {
// // // // // // // // // // //     const fetchUser = async () => {
// // // // // // // // // // //       try {
// // // // // // // // // // //         const res = await axios.get("http://localhost:4000/profile", { withCredentials: true });
// // // // // // // // // // //         if (res.data.id) {
// // // // // // // // // // //           setUser(res.data);
// // // // // // // // // // //         } else {
// // // // // // // // // // //           setUser(null);
// // // // // // // // // // //         }
// // // // // // // // // // //       } catch (err) {
// // // // // // // // // // //         console.error("Auth Error:", err);
// // // // // // // // // // //         setUser(null);
// // // // // // // // // // //       }
// // // // // // // // // // //     };

// // // // // // // // // // //     fetchUser();
// // // // // // // // // // //   }, []);

// // // // // // // // // // //   return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
// // // // // // // // // // // }
// // // // // // // // // // import { createContext, useState, useEffect } from "react";
// // // // // // // // // // import axios from "axios";

// // // // // // // // // // export const UserContext = createContext();

// // // // // // // // // // export function UserContextProvider({ children }) {
// // // // // // // // // //   const [user, setUser] = useState(null);
// // // // // // // // // //   const [loading, setLoading] = useState(true); // Loading state to track if user data is still being fetched

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const fetchUser = async () => {
// // // // // // // // // //       try {
// // // // // // // // // //         const res = await axios.get("http://localhost:4000/profile", { withCredentials: true });
// // // // // // // // // //         if (res.data.id) {
// // // // // // // // // //           setUser(res.data);
// // // // // // // // // //         } else {
// // // // // // // // // //           setUser(null);
// // // // // // // // // //         }
// // // // // // // // // //       } catch (err) {
// // // // // // // // // //         console.error("Auth Error:", err);
// // // // // // // // // //         setUser(null);
// // // // // // // // // //       } finally {
// // // // // // // // // //         setLoading(false); // Set loading to false after fetching is complete
// // // // // // // // // //       }
// // // // // // // // // //     };

// // // // // // // // // //     fetchUser();
// // // // // // // // // //   }, []);

// // // // // // // // // //   return <UserContext.Provider value={{ user, setUser, loading }}>{children}</UserContext.Provider>;
// // // // // // // // // // }
// // // // // // // // // import { createContext, useState, useEffect } from "react";
// // // // // // // // // import axios from "axios";

// // // // // // // // // export const UserContext = createContext();

// // // // // // // // // export function UserContextProvider({ children }) {
// // // // // // // // //   const [user, setUser] = useState(null);
// // // // // // // // //   const [loading, setLoading] = useState(true); // Track loading state for user

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const fetchUser = async () => {
// // // // // // // // //       try {
// // // // // // // // //         const res = await axios.get("http://localhost:4000/profile", { withCredentials: true });
// // // // // // // // //         if (res.data.id) {
// // // // // // // // //           setUser(res.data); // Set user if authenticated
// // // // // // // // //         } else {
// // // // // // // // //           setUser(null); // No user found, set user to null
// // // // // // // // //         }
// // // // // // // // //       } catch (err) {
// // // // // // // // //         console.error("Auth Error:", err);
// // // // // // // // //         setUser(null); // Error, set user to null
// // // // // // // // //       } finally {
// // // // // // // // //         setLoading(false); // Set loading to false after data fetching
// // // // // // // // //       }
// // // // // // // // //     };

// // // // // // // // //     fetchUser(); // Call the fetch function
// // // // // // // // //   }, []);

// // // // // // // // //   return <UserContext.Provider value={{ user, setUser, loading }}>{children}</UserContext.Provider>;
// // // // // // // // // }
// // // // // // // // import { createContext, useState, useEffect } from "react";
// // // // // // // // import axios from "axios";

// // // // // // // // export const UserContext = createContext();

// // // // // // // // export function UserContextProvider({ children }) {
// // // // // // // //   const [user, setUser] = useState(null); // Track the logged-in user
// // // // // // // //   const [loading, setLoading] = useState(true); // Track if data is still loading

// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchUser = async () => {
// // // // // // // //       try {
// // // // // // // //         const res = await axios.get("http://localhost:4000/profile", { withCredentials: true });
// // // // // // // //         if (res.data.id) {
// // // // // // // //           setUser(res.data); // Set the user if authenticated
// // // // // // // //         } else {
// // // // // // // //           setUser(null); // No user found, set to null
// // // // // // // //         }
// // // // // // // //       } catch (err) {
// // // // // // // //         console.error("Auth Error:", err);
// // // // // // // //         setUser(null); // Error while fetching user, set to null
// // // // // // // //       } finally {
// // // // // // // //         setLoading(false); // Set loading to false after fetching data
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     fetchUser(); // Fetch user data on component mount
// // // // // // // //   }, []);

// // // // // // // //   return (
// // // // // // // //     <UserContext.Provider value={{ user, setUser, loading }}>
// // // // // // // //       {children}
// // // // // // // //     </UserContext.Provider>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // import { createContext, useState, useEffect } from "react";
// // // // // // // import axios from "axios";

// // // // // // // export const UserContext = createContext();

// // // // // // // export function UserContextProvider({ children }) {
// // // // // // //   const [user, setUser] = useState(null);
// // // // // // //   const [loading, setLoading] = useState(true);

// // // // // // //   useEffect(() => {
// // // // // // //     axios.get('/api/user/profile')
// // // // // // //       .then((res) => {
// // // // // // //         setUser(res.data || null);
// // // // // // //         setLoading(false);
// // // // // // //       })
// // // // // // //       .catch(() => {
// // // // // // //         setUser(null);
// // // // // // //         setLoading(false);
// // // // // // //       });
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <UserContext.Provider value={{ user, setUser, loading }}>
// // // // // // //       {children}
// // // // // // //     </UserContext.Provider>
// // // // // // //   );
// // // // // // // }
// // // // // import { createContext, useState, useEffect } from "react";
// // // // // import axios from "axios";

// // // // // // // Create the UserContext
// // // // // // export const UserContext = createContext();

// // // // // // export function UserContextProvider({ children }) {
// // // // // //   const [user, setUser] = useState(null);
// // // // // //   const [loading, setLoading] = useState(true);

// // // // // //   useEffect(() => {
// // // // // //     axios.get('/api/user/profile', { withCredentials: true })
// // // // // //       .then((res) => {
// // // // // //         setUser(res.data || null);
// // // // // //         setLoading(false);
// // // // // //       })
// // // // // //       .catch(() => {
// // // // // //         setUser(null);
// // // // // //         setLoading(false);
// // // // // //       });
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <UserContext.Provider value={{ user, setUser, loading }}>
// // // // // //       {children}
// // // // // //     </UserContext.Provider>
// // // // // //   );
// // // // // // }
// // // // // export function UserContextProvider({ children }) {
// // // // //   const [user, setUser] = useState(null);
// // // // //   const [loading, setLoading] = useState(true);

// // // // //   useEffect(() => {
// // // // //     axios.get('/api/user/profile', { withCredentials: true })
// // // // //       .then((res) => {
// // // // //         setUser(res.data || null);
// // // // //       })
// // // // //       .catch(() => {
// // // // //         setUser(null);
// // // // //       })
// // // // //       .finally(() => {
// // // // //         setLoading(false);
// // // // //       });
// // // // //   }, []);

// // // // //   return (
// // // // //     <UserContext.Provider value={{ user, setUser, loading }}>
// // // // //       {children}
// // // // //     </UserContext.Provider>
// // // // //   );
// // // // // }
// // // // // User Context Provider
// // // // export function UserContextProvider({ children }) {
// // // //   const [user, setUser] = useState(null);
// // // //   const [loading, setLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     const fetchUser = async () => {
// // // //       try {
// // // //         const res = await axios.get('/api/user/profile', { 
// // // //           withCredentials: true 
// // // //         });
// // // //         setUser(res.data || null);
// // // //       } catch (error) {
// // // //         setUser(null);
// // // //       } finally {
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchUser();
// // // //   }, []);

// // // //   return (
// // // //     <UserContext.Provider value={{ user, setUser, loading }}>
// // // //       {children}
// // // //     </UserContext.Provider>
// // // //   );
// // // // }
// // // import { createContext, useState, useEffect } from "react";
// // // import axios from "axios";

// // // export const UserContext = createContext();

// // // export function UserContextProvider({ children }) {
// // //   const [user, setUser] = useState(null);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     console.log("[UserContext] Fetching user profile...");
// // //     axios.get('/api/user/profile', { withCredentials: true })
// // //       .then((res) => {
// // //         console.log("[UserContext] Response:", res.data);
// // //         setUser(res.data || null);
// // //       })
// // //       .catch((err) => {
// // //         console.error("[UserContext] Error fetching profile:", err);
// // //         setUser(null);
// // //       })
// // //       .finally(() => {
// // //         setLoading(false);
// // //       });
// // //   }, []);

// // //   return (
// // //     <UserContext.Provider value={{ user, setUser, loading }}>
// // //       {children}
// // //     </UserContext.Provider>
// // //   );
// // // }
// // import { createContext, useState, useEffect } from "react";
// // import axios from "axios";

// // export const UserContext = createContext();

// // export function UserContextProvider({ children }) {
// //   const [user, setUser] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     console.log("[UserContext] Fetching user profile...");
// //     axios.get('/api/user/profile', { withCredentials: true })
// //       .then((res) => {
// //         console.log("[UserContext] Response:", res.data);
// //         setUser(res.data || null);
// //       })
// //       .catch((err) => {
// //         console.error("[UserContext] Error fetching profile:", err);
// //         setUser(null);
// //       })
// //       .finally(() => {
// //         setLoading(false);
// //       });
// //   }, []);

// //   return (
// //     <UserContext.Provider value={{ user, setUser, loading }}>
// //       {children}
// //     </UserContext.Provider>
// //   );
// // }
// import { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const UserContext = createContext(); // ✅ named export

// export function UserContextProvider({ children }) {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true); // ✅ loading state

//   useEffect(() => {
//     console.log("[UserContext] Fetching user profile...");
//     axios
//       .get("/api/user/profile", { withCredentials: true })
//       .then((res) => {
//         console.log("[UserContext] Response:", res.data);
//         setUser(res.data || null);
//       })
//       .catch((err) => {
//         console.error("[UserContext] Error fetching profile:", err);
//         setUser(null);
//       })
//       .finally(() => {
//         setLoading(false); // ✅ set loading to false
//       });
//   }, []);

//   return (
//     <UserContext.Provider value={{ user, setUser, loading }}>
//       {children}
//     </UserContext.Provider>
//   );
// }
import { createContext, useState, useEffect } from "react";
import axios from "axios";

// ✅ named export
export const UserContext = createContext(); 

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    console.log("[UserContext] Fetching user...");
    axios
      .get("/api/user/profile", { withCredentials: true })
      .then((res) => {
        console.log("[UserContext] Response:", res.data);
        setUser(res.data || null);
      })
      .catch((err) => {
        console.error("[UserContext] Error:", err);
        setUser(null);
      })
      .finally(() => {
        console.log("[UserContext] Done loading.");
        setLoading(false);
      });
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
}

