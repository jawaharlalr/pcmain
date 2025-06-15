import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(CartContext);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
  });

  const [error, setError] = useState("");
  const [orderId, setOrderId] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    for (const key in formData) {
      if (!formData[key]) {
        setError("Please fill in all fields.");
        return;
      }
    }

    if (formData.phone.length !== 10 || !/^[0-9]+$/.test(formData.phone)) {
      setError("Phone number must be 10 digits.");
      return;
    }

    const last4 = formData.phone.slice(-4);
    const generatedOrderId = `PC2025${last4}`;
    setOrderId(generatedOrderId);
    setShowSummary(true);
  };

  const handlePlaceOrder = async () => {
    setIsLoading(true);
    try {
      const firebaseOrder = {
        cartItems: cart,
        totalAmount,
        userDetails: {
          name: formData.fullName,
          phone: formData.phone,
          address: formData.address,
        },
        createdAt: Timestamp.now(),
        orderId: orderId,
        userKey: formData.phone,
      };

      const docRef = await addDoc(collection(db, "orders"), firebaseOrder);
      console.log("Order stored with Firebase ID:", docRef.id);

      clearCart();
      localStorage.removeItem("cartItems");

      setIsLoading(false);
      setOrderPlaced(true);
    } catch (err) {
      console.error(err);
      setError("Something went wrong while placing your order.");
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-10 px-4">
      {orderPlaced ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-5 rounded shadow">
          ✅ <strong>Order Placed Successfully!</strong><br />
          <div className="mt-2">
            <strong>Order ID:</strong> <code>{orderId}</code><br />
            We will contact you soon via WhatsApp or phone.
            If You Have Any Modification ContactUs.
          </div>
        </div>
      ) : !showSummary ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-yellow-600">
            Enter Your Details
          </h2>
          <form onSubmit={handleFormSubmit} className="space-y-4">
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
              Continue to Summary
            </button>
          </form>
        </>
      ) : (
        <div className="text-left">
          <div className="bg-white p-4 rounded shadow border mb-6">
            <h2 className="text-xl font-bold text-green-700 mb-2">
              Order Summary
            </h2>
            <p><strong>Order ID:</strong> {orderId}</p>
            <p><strong>Name:</strong> {formData.fullName}</p>
            <p><strong>Phone:</strong> {formData.phone}</p>
            <p><strong>Address:</strong> {formData.address}</p>

            <h3 className="mt-4 font-semibold">Items:</h3>
            <ul className="text-sm list-disc ml-5 space-y-1">
              {cart.map((item, idx) => (
                <li key={idx}>
                  {item.name} × {item.quantity} = ₹
                  {(item.price * item.quantity).toFixed(2)}
                </li>
              ))}
            </ul>

            <p className="mt-2 font-bold text-right">
              Total: ₹{totalAmount.toFixed(2)}
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={handlePlaceOrder}
              disabled={isLoading}
              className="flex-1 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 disabled:opacity-50"
            >
              {isLoading ? "Placing Order..." : "Place Order"}
            </button>
            <button
              onClick={() => setShowSummary(false)}
              className="flex-1 border border-yellow-500 text-yellow-600 px-6 py-2 rounded hover:bg-yellow-50"
            >
              Edit Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
