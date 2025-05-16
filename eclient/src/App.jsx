import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/products" Component={Products} />
        <Route path="/cart" Component={Cart} />
        <Route path="/login" Component={Login} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
