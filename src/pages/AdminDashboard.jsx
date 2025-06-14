import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchOrderId, setSearchOrderId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin !== "true") {
      alert("Access denied. Admins only.");
      navigate("/");
      return;
    }

    const fetchOrders = async () => {
      try {
        const ordersRef = collection(db, "orders");
        const q = query(ordersRef, orderBy("createdAt", "desc"));
        const snapshot = await getDocs(q);
        const orderList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(orderList);
        setFilteredOrders(orderList);
      } catch (err) {
        console.error("❌ Failed to fetch orders:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  const handleSearchChange = (e) => {
    const value = e.target.value.trim().toUpperCase();
    setSearchOrderId(value);
    if (value === "") {
      setFilteredOrders(orders);
    } else {
      setFilteredOrders(
        orders.filter((order) =>
          order.orderId?.toUpperCase().includes(value)
        )
      );
    }
  };

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-yellow-600">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>

      <input
        type="text"
        placeholder="Search by Order ID"
        value={searchOrderId}
        onChange={handleSearchChange}
        className="w-full mb-6 px-4 py-2 border rounded shadow-sm"
      />

      {loading ? (
        <p>Loading orders...</p>
      ) : filteredOrders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        <div className="space-y-4">
          {filteredOrders.map((order, index) => (
            <div
              key={order.id}
              className="border p-4 rounded shadow bg-white"
            >
              <p><strong>S.No:</strong> {index + 1}</p>
              <p><strong>Order ID:</strong> {order.orderId}</p>
              <p><strong>Name:</strong> {order.userDetails.name}</p>
              <p><strong>Phone:</strong> {order.userDetails.phone}</p>
              <p><strong>Address:</strong> {order.userDetails.address}</p>
              <p><strong>Total:</strong> ₹{order.totalAmount.toFixed(2)}</p>

              <ul className="mt-2 list-disc ml-5 text-sm">
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

export default AdminDashboard;
