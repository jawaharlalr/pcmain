import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  updateDoc,
  doc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const AdminDashboard = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchOrderId, setSearchOrderId] = useState("");
  const [editingMethod, setEditingMethod] = useState(null); // track orderId being edited
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = localStorage.getItem("isAdmin");
    if (isAdmin !== "true") {
      alert("Access denied. Admins only.");
      navigate("/");
      return;
    }

    const q = query(collection(db, "orders"), orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const orderList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(orderList);
        setFilteredOrders(orderList);
        setLoading(false);
      },
      (error) => {
        console.error("❌ Real-time fetch failed:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
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

  const updateDeliveryMethod = async (orderId, newMethod) => {
    try {
      const orderRef = doc(db, "orders", orderId);
      await updateDoc(orderRef, { deliveryMethod: newMethod });
      console.log(`✅ Delivery method updated to: ${newMethod}`);
    } catch (error) {
      console.error("❌ Failed to update delivery method:", error);
    }
  };

  const generateInvoice = (order) => {
    const docPdf = new jsPDF();
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    docPdf.setFontSize(16);
    docPdf.setFont("helvetica", "bold");
    docPdf.text("PON CRACKERS SHOP", 14, 20);

    docPdf.setFontSize(10);
    docPdf.setFont("helvetica", "normal");
    docPdf.text("136, Velachery Rd, MGR Nagar,", 14, 26);
    docPdf.text("Pallikaranai, Chennai, Tamil Nadu 600100", 14, 31);
    docPdf.text("Phone: 9884609789", 14, 36);

    docPdf.setFont("helvetica", "bold");
    docPdf.setFontSize(12);
    docPdf.text("Order Receipt", 14, 46);

    docPdf.setFont("helvetica", "normal");
    docPdf.setFontSize(10);
    docPdf.text(`Order ID: ${order.orderId}`, 14, 52);
    docPdf.text(`Date: ${date}  Time: ${time}`, 14, 57);

    docPdf.setFont("helvetica", "bold");
    docPdf.text("Customer Information", 14, 65);
    docPdf.setFont("helvetica", "normal");
    docPdf.text(`Name: ${order.userDetails.name}`, 14, 70);
    docPdf.text(`Phone: ${order.userDetails.phone}`, 14, 75);
    docPdf.text(`Address: ${order.userDetails.address}`, 14, 80);
    docPdf.text(`Delivery Method: ${order.deliveryMethod || "pickup"}`, 14, 85);

    const tableBody = order.cartItems.map((item, index) => [
      index + 1,
      item.name,
      `${item.quantity} Box`,
      `Rs. ${item.price.toFixed(2)}`,
      `Rs. ${(item.price * item.quantity).toFixed(2)}`,
    ]);

    autoTable(docPdf, {
      startY: 95,
      head: [["S.No", "Product", "Qty", "Price", "Total"]],
      body: tableBody,
      theme: "grid",
      headStyles: { fillColor: [220, 53, 69] },
      styles: { fontSize: 10 },
    });

    const finalY = docPdf.lastAutoTable.finalY || 120;

    docPdf.setFont("helvetica", "bold");
    docPdf.text(
      `Total Amount: Rs. ${order.totalAmount.toFixed(2)}`,
      14,
      finalY + 10
    );

    docPdf.setFont("helvetica", "normal");
    docPdf.text(
      "Thank you for shopping with Pon Crackers Shop!",
      14,
      finalY + 20
    );

    docPdf.save(`${order.orderId}-invoice.pdf`);
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

              <div className="mt-2">
  <strong>Delivery Method:</strong>{" "}
  {editingMethod === order.id ? (
    <select
      defaultValue={order.deliveryMethod || ""}
      className="border rounded px-2 py-1 mt-1"
      onChange={async (e) => {
        const newMethod = e.target.value;
        const oldMethod = order.deliveryMethod || "Nil";

        if (newMethod === order.deliveryMethod) {
          setEditingMethod(null);
          return;
        }

        const confirmChange = window.confirm(
          `Change delivery method from "${oldMethod}" to "${newMethod}"?`
        );

        if (confirmChange) {
          await updateDeliveryMethod(order.id, newMethod);
        }

        setEditingMethod(null);
      }}
      onBlur={() => setEditingMethod(null)}
      autoFocus
    >
      <option value="" disabled>
        Select
      </option>
      <option value="pickup">Pickup</option>
      <option value="delivery">Delivery</option>
    </select>
  ) : (
    <span
      className="inline-block px-3 py-1 bg-gray-100 border rounded cursor-pointer hover:bg-gray-200 text-sm"
      onClick={() => setEditingMethod(order.id)}
    >
      {order.deliveryMethod || "Nil"}
    </span>
  )}
</div>


              <ul className="mt-2 list-disc ml-5 text-sm">
                {order.cartItems.map((item, idx) => (
                  <li key={idx}>
                    {item.name} × {item.quantity} = ₹
                    {(item.price * item.quantity).toFixed(2)}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => generateInvoice(order)}
                className="mt-4 bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
              >
                Generate Invoice
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
