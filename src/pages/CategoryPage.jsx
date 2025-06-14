import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { CartContext } from "../context/CartContext";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { cart, addToCart, updateQuantity } = useContext(CartContext);
  const [addedProductIds, setAddedProductIds] = useState({});

  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );

  const getQuantity = (productId) => {
    const item = cart.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedProductIds((prev) => ({ ...prev, [product.id]: 1 }));
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 capitalize text-yellow-600">
        {categoryName} Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const quantity = getQuantity(product.id);
            return (
              <div
                key={product.id}
                className="border rounded-lg p-4 shadow-sm bg-white"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded mb-2"
                />
                <h3 className="text-lg font-semibold">{product.name}</h3>
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
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="bg-gray-200 px-3 py-1 rounded text-lg"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    className="mt-2 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            );
          })
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
