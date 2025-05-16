import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
