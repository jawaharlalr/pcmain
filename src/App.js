import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import CategoryList from "./pages/CategoryList";
import CategoryPage from "./pages/CategoryPage";
import Contact from "./pages/Contact";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage"; // ✅ Imported ProductsPage
import CheckoutPage from "./pages/CheckoutPage";

import { CartProvider } from "./context/CartContext"; // ✅ Cart Context

function App() {
  return (
    <CartProvider> {/* ✅ Wrap everything with CartProvider */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<CategoryList />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} /> {/* ✅ Add route */}
          <Route path="/products" element={<ProductsPage />} /> {/* ✅ Route added */}
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
