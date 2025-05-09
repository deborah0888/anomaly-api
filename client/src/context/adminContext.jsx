import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AdminContext = createContext();

export function AdminContextProvider({ children }) {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    const fetchAdmin = async () => {
      try {
        const res = await axios.get("http://localhost:4000/admin/profile", {
          withCredentials: true,
        });
        if (res.data.id) {
          setAdmin(res.data);
        } else {
          setAdmin(null);
        }
      } catch (err) {
        console.error("Admin Auth Error:", err);
        setAdmin(null);
      }
    };

    fetchAdmin();
  }, []);

  return (
    <AdminContext.Provider value={{ admin, setAdmin }}>
      {children}
    </AdminContext.Provider>
  );
}
