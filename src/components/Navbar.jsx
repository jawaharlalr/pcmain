import React, { useState, useContext } from "react";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="flex items-center justify-between p-3 px-4">
        {/* Logo and menu toggle */}
        <div className="flex items-center space-x-3">
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Link to="/" onClick={() => setMobileMenuOpen(false)}>
            <img
              src="/pon-crackers(1).png"
              alt="Pon Crackers"
              style={{ width: "120px", height: "auto" }}
            />
          </Link>
        </div>

        {/* Desktop search */}
        <form
          onSubmit={handleSearch}
          className="hidden md:flex w-1/2 border rounded overflow-hidden"
        >
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 outline-none"
          />
          <button
            type="submit"
            className="bg-gray-900 text-white px-4 flex items-center"
          >
            <Search size={16} className="mr-1" />
            Search
          </button>
        </form>

        {/* Cart */}
        <Link
          to="/cart"
          className="relative flex items-center border px-4 py-2 rounded"
          onClick={() => setMobileMenuOpen(false)}
        >
          <ShoppingCart className="mr-2" />
          Cart
          {totalItems > 0 && (
            <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-red-600 text-white text-xs px-2 py-0.5 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile menu + search */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3">
          <form onSubmit={handleSearch} className="flex border rounded overflow-hidden">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 outline-none"
            />
            <button
              type="submit"
              className="bg-gray-900 text-white px-4 flex items-center"
            >
              <Search size={16} className="mr-1" />
              Search
            </button>
          </form>
        </div>
      )}

      {/* Navigation links */}
      <div
        className={`md:flex md:justify-center space-x-6 text-sm font-medium py-2 ${
          mobileMenuOpen
            ? "block px-4 space-y-2 md:space-y-0 md:px-0"
            : "hidden md:flex"
        }`}
      >
        <Link to="/" className="block py-2 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>
          HOME
        </Link>
        <Link to="/products" className="block py-2 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>
          PRODUCTS
        </Link>
        <Link to="/contact" className="block py-2 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>
          CONTACT US
        </Link>
        <Link to="/my-orders" className="block py-2 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>
          MY ORDERS
        </Link>
        <a
          href="/pricelist-2025.pdf"
          download
          className="block py-2 hover:text-red-600"
          onClick={() => setMobileMenuOpen(false)}
        >
          PRICE LIST 2025
        </a>
      </div>
    </div>
  );
};

export default Navbar;
