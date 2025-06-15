import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginAdmin from "./pages/loginAdmin";
import AdminDashboard from "./pages/AdminDashboard";
import MyOrders from "./pages/MyOrders";

import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
