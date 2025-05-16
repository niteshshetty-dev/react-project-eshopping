import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div>
        <nav className="flex justify-between max-w-full px-6 py-4">
          <div>
            <h1>eShopping</h1>
          </div>
          <div className="flex gap-4">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/cart">Cart</NavLink>
            <NavLink to="/login">Login</NavLink>
          </div>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
