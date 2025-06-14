import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import products from "../data/products"; // ✅ Import from data

const ProductsPage = () => {
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
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-yellow-500">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => {
          const quantity = getQuantity(product.id);
          return (
            <div
              key={product.id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-4"
              />
              <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-2">₹{product.price}</p>

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
                    onClick={() => {
                      updateQuantity(product.id, quantity + 1);
                    }}
                    className="bg-gray-200 px-3 py-1 rounded text-lg"
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                >
                  Add to Cart
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPage;
