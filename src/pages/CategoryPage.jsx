import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { addToCart } = useContext(CartContext);

  // Filter products by category
  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 capitalize">{categoryName} Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="border rounded-lg p-4 shadow-sm">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">₹{product.price}</p>
              <button
                className="mt-2 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p>No products found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;