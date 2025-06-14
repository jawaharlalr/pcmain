import React from "react";
import { Link } from "react-router-dom";

const CategoryList = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center text-yellow-500">Shop by Category</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <Link to="/category/100wala" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-red-600 mb-2">💯 100 Wala</h3>
          <p className="text-sm text-gray-600">Powerful bursts and loud sounds</p>
        </Link>

        <Link to="/category/bijili" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-blue-500 mb-2">⚡ Bijili Crackers</h3>
          <p className="text-sm text-gray-600">Quick, sparkly and fun for kids</p>
        </Link>

        <Link to="/category/rocket" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-green-600 mb-2">🚀 Rocket</h3>
          <p className="text-sm text-gray-600">Sky launchers with colorful bursts</p>
        </Link>

        <Link to="/category/sparklers" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-orange-500 mb-2">✨ Sparklers</h3>
          <p className="text-sm text-gray-600">Bright hand-held sparkle sticks</p>
        </Link>

        <Link to="/category/flower" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-pink-600 mb-2">🌸 Flower Pots</h3>
          <p className="text-sm text-gray-600">Colorful fountains of joy</p>
        </Link>

        <Link to="/category/chakkar" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-yellow-600 mb-2">🌀 Ground Chakkars</h3>
          <p className="text-sm text-gray-600">Spinning sparks on the ground</p>
        </Link>

        <Link to="/category/novel" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-purple-600 mb-2">🎊 Novelty Crackers</h3>
          <p className="text-sm text-gray-600">Fun shapes and unique effects</p>
        </Link>

        <Link to="/category/sound" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-gray-800 mb-2">🔊 Sound Crackers</h3>
          <p className="text-sm text-gray-600">Loud bangs and thunder effects</p>
        </Link>

        <Link to="/category/bomb" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-red-700 mb-2">💣 Bomb</h3>
          <p className="text-sm text-gray-600">Traditional loud burst crackers</p>
        </Link>

        <Link to="/category/redfort" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-indigo-600 mb-2">🏰 Red Fort</h3>
          <p className="text-sm text-gray-600">Premium high-end effects</p>
        </Link>

        <Link to="/category/smoke" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-green-700 mb-2">🌈 Colour Smoke</h3>
          <p className="text-sm text-gray-600">Vibrant smoke for day-time use</p>
        </Link>

        <Link to="/category/fancy" className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-bold text-fuchsia-700 mb-2">🎇 Fancy Crackers</h3>
          <p className="text-sm text-gray-600">Unique visuals and combos</p>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
