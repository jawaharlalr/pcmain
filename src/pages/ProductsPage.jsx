import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useLocation } from "react-router-dom";
import products from "../data/products";

const ProductsPage = () => {
  const { addToCart, updateQuantity, cart } = useContext(CartContext);
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const categoryFilter = queryParams.get("category");
  const searchFilter = queryParams.get("search");

  // Filter logic based on category and search
  const filteredProducts = products.filter((product) => {
    const matchesCategory = categoryFilter
      ? product.category.toLowerCase() === categoryFilter.toLowerCase()
      : true;

    const matchesSearch = searchFilter
      ? product.name.toLowerCase().includes(searchFilter.toLowerCase())
      : true;

    return matchesCategory && matchesSearch;
  });

  const getQuantity = (productId) => {
    const item = cart.find((item) => item.id === productId);
    return item ? item.quantity : 0;
  };

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-yellow-500">
        {searchFilter
          ? `Search Results for "${searchFilter}"`
          : categoryFilter
          ? `${categoryFilter} Products`
          : "All Products"}
      </h2>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-600">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const quantity = getQuantity(product.id);
            return (
              <div
                key={product.id}
                className="relative border rounded-lg p-4 shadow hover:shadow-lg transition-transform duration-300 transform hover:scale-105"
              >
                {/* NEW ARRIVAL TAG */}
                {product.isNew && (
                  <span className="absolute top-2 left-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded animate-pulse">
                    NEW ARRIVAL
                  </span>
                )}

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
                      onClick={() => updateQuantity(product.id, quantity - 1)}
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
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
