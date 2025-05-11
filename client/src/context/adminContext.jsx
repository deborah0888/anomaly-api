// // // // // // // // // // import { createContext, useState, useEffect } from "react";
// // // // // // // // // // import axios from "axios";

// // // // // // // // // // export const AdminContext = createContext();

// // // // // // // // // // export function AdminContextProvider({ children }) {
// // // // // // // // // //   const [admin, setAdmin] = useState(null);

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const fetchAdmin = async () => {
// // // // // // // // // //       try {
// // // // // // // // // //         const res = await axios.get("http://localhost:4000/admin/profile", {
// // // // // // // // // //           withCredentials: true,
// // // // // // // // // //         });
// // // // // // // // // //         if (res.data.id) {
// // // // // // // // // //           setAdmin(res.data);
// // // // // // // // // //         } else {
// // // // // // // // // //           setAdmin(null);
// // // // // // // // // //         }
// // // // // // // // // //       } catch (err) {
// // // // // // // // // //         console.error("Admin Auth Error:", err);
// // // // // // // // // //         setAdmin(null);
// // // // // // // // // //       }
// // // // // // // // // //     };

// // // // // // // // // //     fetchAdmin();
// // // // // // // // // //   }, []);

// // // // // // // // // //   return (
// // // // // // // // // //     <AdminContext.Provider value={{ admin, setAdmin }}>
// // // // // // // // // //       {children}
// // // // // // // // // //     </AdminContext.Provider>
// // // // // // // // // //   );
// // // // // // // // // // }
// // // // // // // // // import { createContext, useState, useEffect } from "react";
// // // // // // // // // import axios from "axios";

// // // // // // // // // export const AdminContext = createContext();

// // // // // // // // // export function AdminContextProvider({ children }) {
// // // // // // // // //   const [admin, setAdmin] = useState(null);
// // // // // // // // //   const [loading, setLoading] = useState(true); // loading added

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const fetchAdmin = async () => {
// // // // // // // // //       try {
// // // // // // // // //         const res = await axios.get("http://localhost:4000/admin/profile", {
// // // // // // // // //           withCredentials: true,
// // // // // // // // //         });
// // // // // // // // //         if (res.data?.id) {
// // // // // // // // //           setAdmin(res.data);
// // // // // // // // //         } else {
// // // // // // // // //           setAdmin(null);
// // // // // // // // //         }
// // // // // // // // //       } catch (err) {
// // // // // // // // //         console.error("Admin Auth Error:", err);
// // // // // // // // //         setAdmin(null);
// // // // // // // // //       } finally {
// // // // // // // // //         setLoading(false);
// // // // // // // // //       }
// // // // // // // // //     };

// // // // // // // // //     fetchAdmin();
// // // // // // // // //   }, []);

// // // // // // // // //   return (
// // // // // // // // //     <AdminContext.Provider value={{ admin, setAdmin, loading }}>
// // // // // // // // //       {children}
// // // // // // // // //     </AdminContext.Provider>
// // // // // // // // //   );
// // // // // // // // // }
// // // // // // // // import { createContext, useState, useEffect } from "react";
// // // // // // // // import axios from "axios";

// // // // // // // // export const AdminContext = createContext();

// // // // // // // // export function AdminContextProvider({ children }) {
// // // // // // // //   const [admin, setAdmin] = useState(null);
// // // // // // // //   const [loading, setLoading] = useState(true); // <-- ADD THIS

// // // // // // // //   useEffect(() => {
// // // // // // // //     const fetchAdmin = async () => {
// // // // // // // //       try {
// // // // // // // //         const res = await axios.get("/admin/profile", {
// // // // // // // //           withCredentials: true,
// // // // // // // //         });
// // // // // // // //         if (res.data.id) {
// // // // // // // //           setAdmin(res.data);
// // // // // // // //         } else {
// // // // // // // //           setAdmin(null);
// // // // // // // //         }
// // // // // // // //       } catch (err) {
// // // // // // // //         console.error("Admin Auth Error:", err);
// // // // // // // //         setAdmin(null);
// // // // // // // //       } finally {
// // // // // // // //         setLoading(false); // <-- SET LOADING TO FALSE AFTER CHECK
// // // // // // // //       }
// // // // // // // //     };

// // // // // // // //     fetchAdmin();
// // // // // // // //   }, []);

// // // // // // // //   return (
// // // // // // // //     <AdminContext.Provider value={{ admin, setAdmin, loading }}>
// // // // // // // //       {children}
// // // // // // // //     </AdminContext.Provider>
// // // // // // // //   );
// // // // // // // // }
// // // // // // // import { createContext, useState, useEffect } from "react";
// // // // // // // import axios from "axios";

// // // // // // // // Create the AdminContext
// // // // // // // export const AdminContext = createContext();

// // // // // // // export function AdminContextProvider({ children }) {
// // // // // // //   const [admin, setAdmin] = useState(null);
// // // // // // //   const [loading, setLoading] = useState(true); // Controls when to show nav

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchAdmin = async () => {
// // // // // // //       try {
// // // // // // //         // Uses axios.defaults.baseURL = 'http://localhost:8000'
// // // // // // //         const res = await axios.get("/api/admin/profile", {
// // // // // // //           withCredentials: true,
// // // // // // //         });

// // // // // // //         if (res.data && res.data.id) {
// // // // // // //           setAdmin(res.data);
// // // // // // //         } else {
// // // // // // //           setAdmin(null);
// // // // // // //         }
// // // // // // //       } catch (err) {
// // // // // // //         console.error("Admin Auth Error:", err);
// // // // // // //         setAdmin(null);
// // // // // // //       } finally {
// // // // // // //         setLoading(false); // Set loading to false whether success or error
// // // // // // //       }
// // // // // // //     };

// // // // // // //     fetchAdmin();
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <AdminContext.Provider value={{ admin, setAdmin, loading }}>
// // // // // // //       {children}
// // // // // // //     </AdminContext.Provider>
// // // // // // //   );
// // // // // // // }
// // // // // import { createContext, useState, useEffect } from "react";
// // // // // import axios from "axios";

// // // // // // // // Create the AdminContext
// // // // // // // export const AdminContext = createContext();

// // // // // // // export function AdminContextProvider({ children }) {
// // // // // // //   const [admin, setAdmin] = useState(null);
// // // // // // //   const [loading, setLoading] = useState(true); // Controls when to show nav

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchAdmin = async () => {
// // // // // // //       try {
// // // // // // //         // Using default axios base URL or specify full URL if needed
// // // // // // //         const res = await axios.get("/api/admin/profile", {
// // // // // // //           withCredentials: true,
// // // // // // //         });

// // // // // // //         if (res.data && res.data.id) {
// // // // // // //           setAdmin(res.data); // Set admin info if exists
// // // // // // //         } else {
// // // // // // //           setAdmin(null);
// // // // // // //         }
// // // // // // //       } catch (err) {
// // // // // // //         console.error("Admin Auth Error:", err);
// // // // // // //         setAdmin(null); // In case of error, no admin
// // // // // // //       } finally {
// // // // // // //         setLoading(false); // Set loading to false after fetch
// // // // // // //       }
// // // // // // //     };

// // // // // // //     fetchAdmin();
// // // // // // //   }, []);

// // // // // // //   return (
// // // // // // //     <AdminContext.Provider value={{ admin, setAdmin, loading }}>
// // // // // // //       {children}
// // // // // // //     </AdminContext.Provider>
// // // // // // //   );
// // // // // // // }
// // // // // // export function AdminContextProvider({ children }) {
// // // // // //   const [admin, setAdmin] = useState(null);
// // // // // //   const [loading, setLoading] = useState(true);

// // // // // //   useEffect(() => {
// // // // // //     axios.get('/api/admin/profile', { withCredentials: true })
// // // // // //       .then((res) => {
// // // // // //         setAdmin(res.data?.id ? res.data : null);
// // // // // //       })
// // // // // //       .catch(() => {
// // // // // //         setAdmin(null);
// // // // // //       })
// // // // // //       .finally(() => {
// // // // // //         setLoading(false);
// // // // // //       });
// // // // // //   }, []);

// // // // // //   return (
// // // // // //     <AdminContext.Provider value={{ admin, setAdmin, loading }}>
// // // // // //       {children}
// // // // // //     </AdminContext.Provider>
// // // // // //   );
// // // // // // }
// // // // // // Admin Context Provider
// // // // // export function AdminContextProvider({ children }) {
// // // // //   const [admin, setAdmin] = useState(null);
// // // // //   const [loading, setLoading] = useState(true);

// // // // //   useEffect(() => {
// // // // //     const fetchAdmin = async () => {
// // // // //       try {
// // // // //         const res = await axios.get('/api/admin/profile', { 
// // // // //           withCredentials: true 
// // // // //         });
// // // // //         setAdmin(res.data?.id ? res.data : null);
// // // // //       } catch (error) {
// // // // //         setAdmin(null);
// // // // //       } finally {
// // // // //         setLoading(false);
// // // // //       }
// // // // //     };

// // // // //     fetchAdmin();
// // // // //   }, []);

// // // // //   return (
// // // // //     <AdminContext.Provider value={{ admin, setAdmin, loading }}>
// // // // //       {children}
// // // // //     </AdminContext.Provider>
// // // // //   );
// // // // // }
// // // // // src/context/adminContext.jsx
// // // // import { createContext, useState, useEffect } from "react";
// // // // import axios from "axios";

// // // // // This is the crucial export
// // // // export const AdminContext = createContext();

// // // // export function AdminContextProvider({ children }) {
// // // //   const [admin, setAdmin] = useState(null);
// // // //   const [loading, setLoading] = useState(true);

// // // //   useEffect(() => {
// // // //     // ... your existing code
// // // //   }, []);

// // // //   return (
// // // //     <AdminContext.Provider value={{ admin, setAdmin, loading }}>
// // // //       {children}
// // // //     </AdminContext.Provider>
// // // //   );
// // // // }
// // // import { createContext, useState, useEffect } from "react";
// // // import axios from "axios";

// // // export const AdminContext = createContext();

// // // export function AdminContextProvider({ children }) {
// // //   const [admin, setAdmin] = useState(null);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     console.log("[AdminContext] Fetching admin profile...");
// // //     axios.get("/api/admin/profile", { withCredentials: true })
// // //       .then((res) => {
// // //         console.log("[AdminContext] Response:", res.data);
// // //         if (res.data?.id) {
// // //           setAdmin(res.data);
// // //         } else {
// // //           setAdmin(null);
// // //         }
// // //       })
// // //       .catch((err) => {
// // //         console.error("[AdminContext] Error fetching profile:", err);
// // //         setAdmin(null);
// // //       })
// // //       .finally(() => {
// // //         setLoading(false);
// // //       });
// // //   }, []);

// // //   return (
// // //     <AdminContext.Provider value={{ admin, setAdmin, loading }}>
// // //       {children}
// // //     </AdminContext.Provider>
// // //   );
// // // }
// import { createContext, useState, useEffect } from "react";
// import axios from "axios";

// // export const AdminContext = createContext();

// // export function AdminContextProvider({ children }) {
// //   const [admin, setAdmin] = useState(null);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     console.log("[AdminContext] Fetching admin profile...");
// //     axios.get("/api/admin/profile", { withCredentials: true })
// //       .then((res) => {
// //         console.log("[AdminContext] Response:", res.data);
// //         if (res.data?.id) {
// //           setAdmin(res.data);
// //         } else {
// //           setAdmin(null);
// //         }
// //       })
// //       .catch((err) => {
// //         console.error("[AdminContext] Error fetching profile:", err);
// //         setAdmin(null);
// //       })
// //       .finally(() => {
// //         setLoading(false);
// //       });
// //   }, []);

// //   return (
// //     <AdminContext.Provider value={{ admin, setAdmin, loading }}>
// //       {children}
// //     </AdminContext.Provider>
// //   );
// // }
// const fetchAdmin = async () => {
//   setAdminLoading(true);
//   try {
//     const token = localStorage.getItem("adminToken");
//     const res = await axios.get("/api/admin/profile", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     setAdmin(res.data);
//   } catch (err) {
//     console.error("Admin Auth Error:", err);
//     setAdmin(null);  // Optional: fallback
//   } finally {
//     setAdminLoading(false);
//   }
// };
// src/contexts/adminContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [adminLoading, setAdminLoading] = useState(true);

  const fetchAdmin = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      if (!token) throw new Error("No admin token");

      const res = await axios.get("http://localhost:8000/api/admin/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true, // Optional if you're using cookies
      });

      setAdmin(res.data.admin);
    } catch (err) {
      console.error("Admin Auth Error:", err);
      setAdmin(null);
    } finally {
      setAdminLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmin();
  }, []);

  return (
    <AdminContext.Provider value={{ admin, setAdmin, adminLoading }}>
      {children}
    </AdminContext.Provider>
  );
};
