import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://trackbe.onrender.com/login", { username, password });
      toast.success("Login Successfully");
      navigate("/")
      localStorage.setItem("token",res.data.token)
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-purple-800 text-black p-6 rounded-md max-w-sm mx-auto mt-10 shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
      <input
        className="w-full p-3 mb-4 rounded-md border border-purple-600 focus:outline-none focus:ring focus:ring-purple-500"
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        className="w-full p-3 mb-4 rounded-md border border-purple-600 focus:outline-none focus:ring focus:ring-purple-500"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          id="rememberMe"
          className="mr-2"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
        <label htmlFor="rememberMe" className="text-sm">Remember Me</label>
      </div>
      <Link to={"/register"} className="text-sm my-2">click here to register</Link>
      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 my-4 text-white font-bold py-2 rounded-md"
      >
        Login
      </button>
    </form>
  );
}

export default Login;