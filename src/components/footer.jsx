import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-4 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-2">
        <h2 className="text-xl font-bold text-yellow-400">
          <Link
            to="/login-admin"
            className="cursor-pointer hover:text-white"
            title="Admin Login"
          >
            Pon
          </Link>{" "}
          Crackers Shop
        </h2>

        <p className="text-sm">
          © {new Date().getFullYear()} Pon Crackers Shop. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
