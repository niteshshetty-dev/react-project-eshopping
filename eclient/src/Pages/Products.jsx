import SideBar from "../Components/SideBar";
import ProductCard from "../Components/ProductCard";
import { useState } from "react";
import products from "../data/Products";
import { useCart } from "../context/cartContext";

function Products() {
  const [addedMap, setAddedMap] = useState({});

  const [filters, setFilters] = useState({
    categories: [],
    minPrice: 0,
    maxPrice: 10000,
  });

  const { addToCart } = useCart();

  function handleCart(p) {
    addToCart(p);
    setAddedMap((prev) => ({ ...prev, [p.id]: true }));
    setTimeout(() => setAddedMap((prev) => ({ ...prev, [p.id]: false })), 1000);
  }
  function onFilterChange(newFilters) {
    setFilters(newFilters);
  }

  const filteredProducts = products.filter((product) => {
    const inCategory =
      filters.categories.length === 0 ||
      filters.categories.includes(product.category);

    const inPriceRange =
      product.price >= filters.minPrice && product.price <= filters.maxPrice;

    return inCategory && inPriceRange;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mb-8">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/4 w-full">
          <SideBar onFilterChange={onFilterChange} />
        </div>

        <div className="lg:w-3/4 w-full">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((p) => (
                <div
                  key={p.id}
                  className="shadow-md rounded-xl p-4 sm:p-6 lg:p-8 hover:scale-105 transition-transform duration-300 bg-white flex flex-col justify-between h-full"
                >
                  <ProductCard product={p} />
                  <button
                    className={`w-full py-2 rounded text-sm font-medium transition ${
                      addedMap[p.id]
                        ? "bg-gray-500 text-black"
                        : "bg-black text-white hover:bg-gray-800"
                    }`}
                    onClick={() => handleCart(p)}
                  >
                    {addedMap[p.id] ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-600 mt-8">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
