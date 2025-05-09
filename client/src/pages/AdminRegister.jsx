import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function AdminRegister() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerAdmin = async (e) => {
    e.preventDefault();

    const { name, email, password } = data;
    if (!name || !email || !password) {
      toast.error("All fields are required!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/admin/register",
        {
          name,
          email,
          password,
        }
      );

      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.success("Admin registration successful!");
        setData({ name: "", email: "", password: "" });
        navigate("/adminlogin");
      }
    } catch (error) {
      console.error("Admin Registration Error:", error);
      toast.error(
        error.response?.data?.error || "Admin registration failed"
      );
    }
  };

  return (
    <div>
      <form onSubmit={registerAdmin}>
        <label>Name</label>
        <input
          type="text"
          placeholder="Enter name..."
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          required
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email..."
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter password..."
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
