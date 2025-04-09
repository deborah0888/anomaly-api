import { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

export default function Login() {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });

  const loginUser = async (e) => {
    e.preventDefault();

    const { email, password } = data;
    if (!email || !password) {
      toast.error("Email and password are required!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/auth/login", { email, password }, { withCredentials: true });

      if (response.data.error) {
        toast.error(response.data.error);
      } else {
        toast.success("Login successful!");
        setUser(response.data.user); // Update global user context
        setData({ email: "", password: "" });
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Something went wrong. Please try again!");
    }
  };

  return (
    <div>
      <form onSubmit={loginUser}>
        <label>Email</label>
        <input type="email" placeholder="Enter email..." value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} required />

        <label>Password</label>
        <input type="password" placeholder="Enter password..." value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
