import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  const handleAdminLogin = () => {
    const email = prompt("Enter admin email:");
    const password = prompt("Enter admin password:");

    if (email === "poncrackers25@gmail.com" && password === "pc2016") {
      alert("✅ Admin login successful!");
      window.location.href = "/login-admin"; // or use navigate if using react-router
    } else {
      alert("❌ Admin login failed. Invalid credentials.");
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-4 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-2">
        <h2 className="text-xl font-bold text-yellow-400">
          <span
            onClick={handleAdminLogin}
            className="cursor-pointer hover:text-white"
            title="Admin Login"
          >
            Pon
          </span>{" "}
          Crackers Shop
        </h2>

        <p className="text-sm">
          © {new Date().getFullYear()} Pon Crackers Shop. All rights reserved.
        </p>

        <div className="flex gap-4 mt-2">
          <FaFacebookF className="cursor-pointer hover:text-yellow-400" />
          <FaTwitter className="cursor-pointer hover:text-yellow-400" />
          <FaInstagram className="cursor-pointer hover:text-yellow-400" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
