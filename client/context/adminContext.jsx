// import { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const AdminContext = createContext();

// export function AdminContextProvider({ children }) {
//   const [admin, setAdmin] = useState(null);

//   useEffect(() => {
//     const fetchAdmin = async () => {
//       try {
//         const res = await axios.get("http://localhost:4000/admin/profile", {
//           withCredentials: true,
//         });
//         if (res.data.id) {
//           setAdmin(res.data);
//         } else {
//           setAdmin(null);
//         }
//       } catch (err) {
//         console.error("Admin Auth Error:", err);
//         setAdmin(null);
//       }
//     };

//     fetchAdmin();
//   }, []);

//   return (
//     <AdminContext.Provider value={{ admin, setAdmin }}>
//       {children}
//     </AdminContext.Provider>
//   );
// }
import { createContext, useState, useEffect } from "react";
import axios from "axios";

// Create the AdminContext
export const AdminContext = createContext();

export function AdminContextProvider({ children }) {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true); // Controls when to show nav

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        // Uses axios.defaults.baseURL = 'http://localhost:8000'
        const res = await axios.get("/api/admin/profile", {
          withCredentials: true,
        });

        if (res.data && res.data.id) {
          setAdmin(res.data);
        } else {
          setAdmin(null);
        }
      } catch (err) {
        console.error("Admin Auth Error:", err);
        setAdmin(null);
      } finally {
        setLoading(false); // Set loading to false whether success or error
      }
    };

    fetchAdmin();
  }, []);

  return (
    <AdminContext.Provider value={{ admin, setAdmin, loading }}>
      {children}
    </AdminContext.Provider>
  );
}
