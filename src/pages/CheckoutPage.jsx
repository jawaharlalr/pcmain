import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
  });

  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // clear on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (!formData[key]) {
        setError("Please fill in all fields.");
        return;
      }
    }

    if (formData.phone.length !== 10) {
      setError("Phone number must be 10 digits.");
      return;
    }

    const last4 = formData.phone.slice(-4);
    const generatedOrderId = `PC2025${last4}`;

    setOrderId(generatedOrderId);
    clearCart();
  };

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      {orderId ? (
        <div className="text-center">
          <h2 className="text-2xl font-bold text-green-600 mb-4">Order Placed Successfully!</h2>
          <p className="text-lg font-medium">Your Order ID is</p>
          <p className="text-xl font-bold text-yellow-600 mt-2">{orderId}</p>
          <button
            onClick={() => navigate("/")}
            className="mt-6 px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Go to Home
          </button>
        </div>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-6 text-yellow-600">Enter Your Details</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />
            <textarea
              name="address"
              placeholder="Full Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border px-4 py-2 rounded"
            />

            {error && <p className="text-red-600">{error}</p>}

            <button
              type="submit"
              className="w-full bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              Place Order
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default CheckoutPage;
