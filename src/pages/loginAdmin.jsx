// src/pages/LoginAdmin.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginAdmin from "../utils/loginAdmin"; // ✅ Ensure it's default export

const LoginAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await loginAdmin(email, password); // ✅ Don't pass navigate
    if (user && user.email === "poncrackers25@gmail.com") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin-dashboard");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-yellow-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-xl font-bold mb-4 text-yellow-700">Admin Login</h2>
        <div className="mb-3">
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded w-full"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginAdmin;
