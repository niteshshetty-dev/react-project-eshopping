import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <>
      <header>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold tracking-wide text-red-600 font-sans ">
            J<span className="text-lg">&</span>N
          </h1>

          <nav aria-label="Main Navigation">
            <ul className="flex space-x-8">
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-black font-bold"
                      : "text-gray-600 hover:text-black transition duration-200"
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-black font-bold"
                      : "text-gray-600 hover:text-black"
                  }
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-black font-bold"
                      : "text-gray-600 hover:text-black"
                  }
                  to="/cart"
                >
                  Cart
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "text-black font-bold"
                      : "text-gray-600 hover:text-black"
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavBar;
