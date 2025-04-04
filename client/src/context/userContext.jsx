// // import { createContext, useState, useEffect } from "react";

// // export const UserContext = createContext();

// // export function UserContextProvider({ children }) {
// //   const [user, setUser] = useState(null);

// //   // Fetch user profile when app starts (checks if user is logged in)
// //   useEffect(() => {
// //     fetch("http://localhost:4000/profile", {
// //       credentials: "include", // Ensures cookies are sent
// //     })
// //       .then((res) => res.json())
// //       .then((data) => {
// //         if (data.id) {
// //           setUser(data);
// //         }
// //       })
// //       .catch((err) => console.error("Auth Error:", err));
// //   }, []);

// //   return (
// //     <UserContext.Provider value={{ user, setUser }}>
// //       {children}
// //     </UserContext.Provider>
// //   );
// // }
// import { createContext, useState, useEffect } from "react";
// import axios from "axios";

// export const UserContext = createContext();

// export function UserContextProvider({ children }) {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:4000/profile", { withCredentials: true })
//       .then((res) => {
//         if (res.data.id) {
//           setUser(res.data);
//         } else {
//           setUser(null);
//         }
//       })
//       .catch((err) => console.error("Auth Error:", err));
//   }, []);

//   return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
// }
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get("http://localhost:4000/profile", { withCredentials: true });
        if (res.data.id) {
          setUser(res.data);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("Auth Error:", err);
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}
