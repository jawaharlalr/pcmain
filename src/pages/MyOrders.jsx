import React, { useState } from "react";
import { db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

const MyOrders = () => {
  const [phone, setPhone] = useState("");
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (phone.length !== 10) {
      setError("Enter a valid 10-digit phone number.");
      return;
    }

    try {
      const q = query(
        collection(db, "orders"),
        where("userKey", "==", phone)
      );

      const querySnapshot = await getDocs(q);
      const userOrders = [];
      querySnapshot.forEach((doc) => {
        userOrders.push({ id: doc.id, ...doc.data() });
      });

      if (userOrders.length === 0) {
        setError("No orders found.");
      } else {
        setOrders(userOrders);
        setError("");
      }
    } catch (err) {
      console.error(err);
      setError("Error fetching orders.");
    }
  };

  return (
    <div className="max-w-xl mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold text-yellow-600 mb-4">My Orders</h2>
      <div className="flex gap-2 mb-4">
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          className="flex-1 border px-3 py-2 rounded"
        />
        <button
          onClick={handleSearch}
          className="bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-600">{error}</p>}

      {orders.length > 0 && (
        <div className="space-y-4 mt-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="border rounded p-4 shadow-sm bg-white"
            >
              <p><strong>Order ID:</strong> {order.orderId}</p>
              <p><strong>Name:</strong> {order.userDetails.name}</p>
              <p><strong>Phone:</strong> {order.userDetails.phone}</p>
              <p><strong>Address:</strong> {order.userDetails.address}</p>
              <p><strong>Total:</strong> ₹{order.totalAmount}</p>
              {order.deliveryMethod && (
                <p><strong>Delivery Method:</strong> {order.deliveryMethod}</p>
              )}

              <ul className="list-disc ml-5 mt-2 text-sm">
                {order.cartItems.map((item, idx) => (
                  <li key={idx}>
                    {item.name} × {item.quantity} = ₹
                    {(item.price * item.quantity).toFixed(2)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
