import React, { useContext } from "react";
import Advertisement from "../components/Adimages";
import AboutUs from "../components/Aboutus";
import Footer from "../components/footer";
import products from "../data/products"; // ✅ Import products
import { CartContext } from "../context/CartContext"; // ✅ Import cart context

function Home() {
  const { addToCart } = useContext(CartContext); // ✅ Access addToCart from context

  return (
    <div>
      {/* Top banner */}
      <Advertisement />

      {/* Products grid */}
      <div className="p-4 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded shadow hover:shadow-md transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover mb-2 rounded"
              />
              <h3 className="text-sm font-semibold">{product.name}</h3>
              <p className="text-red-600 font-bold mb-2">₹{product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-1 rounded"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* About and Footer */}
      <AboutUs />
      <Footer />
    </div>
  );
}

export default Home;
