// src/pages/CategoryList.jsx
import React from "react";
import { Link } from "react-router-dom";

const CategoryList = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-yellow-500">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

        {/* 100 Wala */}
        <Link to="/category/100wala" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-red-600 mb-2">💯 100 Wala</h3>
          <p className="text-sm text-gray-600">Powerful bursts and loud sounds</p>
        </Link>

        {/* Bijili */}
        <Link to="/category/bijili" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-blue-500 mb-2">⚡ Bijili Crackers</h3>
          <p className="text-sm text-gray-600">Quick, sparkly and fun for kids</p>
        </Link>

        {/* Rocket */}
        <Link to="/category/rocket" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-green-600 mb-2">🚀 Rocket</h3>
          <p className="text-sm text-gray-600">Sky launchers with colorful bursts</p>
        </Link>

      </div>
    </div>
  );
};

export default CategoryList;