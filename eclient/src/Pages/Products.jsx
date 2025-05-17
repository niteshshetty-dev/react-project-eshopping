import SideBar from "../Components/SideBar";
import ProductCard from "../Components/ProductCard";
import { useState } from "react";
import products from "../../data/Products";

function Products() {
  const [filters, setFilters] = useState({
    categories: [],
    minPrice: 0,
    maxPrice: 10000,
  });

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
    <>
      <div className="flex">
        <div className="w-1/4">
          <SideBar onFilterChange={onFilterChange} />
        </div>
        <div className="w-3/4 grid grid-cols-3 gap-4">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
