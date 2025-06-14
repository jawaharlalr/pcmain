import React, { useContext, useState } from "react";
import Advertisement from "../components/Adimages";
import AboutUs from "../components/Aboutus";
import Footer from "../components/footer";
import products from "../data/products";
import { CartContext } from "../context/CartContext";

function Home() {
  const { cart, addToCart, updateQuantity } = useContext(CartContext);
  const [addedProductIds, setAddedProductIds] = useState({});

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProductIds((prev) => ({ ...prev, [product.id]: 1 }));
  };

  const getQuantity = (productId) => {
    const item = cart.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <div>
      {/* Top banner */}
      <Advertisement />

      {/* Products grid */}
      <div className="p-4 md:p-8">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center text-yellow-500">
          Featured Products
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => {
            const quantity = getQuantity(product.id);
            return (
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

                {quantity > 0 ? (
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => {
                        const newQty = quantity - 1;
                        updateQuantity(product.id, newQty);
                        if (newQty === 0) {
                          setAddedProductIds((prev) => {
                            const updated = { ...prev };
                            delete updated[product.id];
                            return updated;
                          });
                        }
                      }}
                      className="bg-gray-200 px-3 py-1 rounded text-lg"
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button
                      onClick={() =>
                        updateQuantity(product.id, quantity + 1)
                      }
                      className="bg-gray-200 px-3 py-1 rounded text-lg"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-green-600 hover:bg-green-700 text-white text-sm px-3 py-1 rounded"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* About and Footer */}
      <AboutUs />
      <Footer />
    </div>
  );
}

export default Home;
