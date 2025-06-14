import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    navigate("/checkout");

  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h2 className="text-3xl font-bold mb-6 text-yellow-600">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-6">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex flex-col sm:flex-row justify-between items-center border-b pb-4"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded border"
                    />
                  )}
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      ₹{item.price} × {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-4 sm:mt-0">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value) || 1)
                    }
                    className="w-14 border px-2 py-1 rounded text-center"
                  />
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Cart Controls */}
          <div className="mt-8 flex justify-between items-center">
            <button
              onClick={clearCart}
              className="text-sm text-red-500 hover:underline"
            >
              Clear Cart
            </button>

            <p className="text-lg font-semibold">
              Total: <span className="text-yellow-600">₹{total.toFixed(2)}</span>
            </p>
          </div>

          {/* Checkout Button */}
          <div className="mt-6 text-right">
            <button
              onClick={handleCheckout}
              className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;