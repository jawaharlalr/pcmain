import React, { useState, useContext, useEffect, useRef } from "react";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import products from "../data/products";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { cart } = useContext(CartContext);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const uniqueCategories = [...new Set(products.map((p) => p.category))];

  // 🧠 Capitalize category names
  const formatCategory = (cat) =>
    cat.charAt(0).toUpperCase() + cat.slice(1).replace(/([a-z])([A-Z])/g, "$1 $2");

  // ✅ Close category dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowCategoryDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 🔍 Search submit
  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="flex items-center justify-between p-3 px-4">
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

        <div className="hidden md:flex w-1/2 border rounded overflow-hidden">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 outline-none"
          />
          <button
            className="bg-gray-900 text-white px-4 flex items-center"
            onClick={handleSearch}
          >
            <Search size={16} className="mr-1" /> Search
          </button>
        </div>

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

      {/* Navigation Menu */}
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

        {/* CATEGORY Dropdown */}
        <div className="relative inline-block" ref={dropdownRef}>
          <button
            onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
            className="block py-2 hover:text-red-600"
          >
            CATEGORY
          </button>

          {showCategoryDropdown && (
            <div className="absolute top-full left-0 mt-1 bg-white border shadow-md rounded-md text-sm z-10">
              {uniqueCategories.map((category) => (
                <Link
                  key={category}
                  to={`/category/${category}`}
                  className="block px-4 py-2 hover:bg-red-100 capitalize"
                  onClick={() => {
                    setShowCategoryDropdown(false);
                    setMobileMenuOpen(false);
                  }}
                >
                  {formatCategory(category)}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link to="/products" className="block py-2 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>
          PRODUCTS
        </Link>

        <Link to="/contact" className="block py-2 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>
          CONTACT US
        </Link>

        <Link to="/my-orders" className="block py-2 hover:text-red-600" onClick={() => setMobileMenuOpen(false)}>
          MY ORDERS
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
