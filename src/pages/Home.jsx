import React from "react";
import Advertisement from "../components/Adimages";
import AboutUs from "../components/Aboutus";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

// ✅ Define category data
const categories = [
  {
    name: "Sparklers",
    display: "Sparklers",
    image: "/images/sparklers.jpg",
  },
  {
    name: "Chakkars",
    display: "Chakkras",
    image: "/images/chakkras.jpg",
  },
  {
    name: "Flower Pots",
    display: "Flower Pots",
    image: "/images/flowerpots.jpg",
  },
  {
    name: "Novel Fireworks",
    display: "Novel Fireworks",
    image: "/images/novelfireworks.jpg",
  },
  {
    name: "Sound Crackers",
    display: "Sound Crackers",
    image: "/images/soundcrackers.png",
  },
  {
    name: "Bijili",
    display: "Bijili",
    image: "/images/bijili.jpeg",
  },
  {
    name: "Bomb",
    display: "Bomb",
    image: "/images/bomb.jpg",
  },
  {
    name: "RedFort Fireworks",
    display: "RedFort Fireworks",
    image: "/images/redfort.jpg",
  },
  {
    name: "Rockets",
    display: "Rockets",
    image: "/images/rockets.jpg",
  },
  // ➕ Add more categories here as needed
];

function Home() {
  return (
    <div>
      <Advertisement />

      {/* ✅ Category Grid */}
      <div className="p-4 md:p-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center text-yellow-600">Shop by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              to={`/products?category=${cat.name}`}
              key={cat.name}
              className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden"
            >
              <img
                src={cat.image}
                alt={cat.display}
                className="w-full h-36 object-cover"
              />
              <div className="p-3 text-center font-medium text-gray-800">
                {cat.display}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <AboutUs />
      <Footer />
    </div>
  );
}

export default Home;
