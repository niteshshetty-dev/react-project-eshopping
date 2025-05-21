import { useState, useEffect } from "react";

function SideBar(props) {
  const [category, setCategory] = useState([]);
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(3000);
  const priceMin = Math.min(minPrice, maxPrice);
  const priceMax = Math.max(minPrice, maxPrice);

  function handleCategory(e) {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((cat) => cat !== value)
        : [...prev, value]
    );
  }

  function handlePrice(e) {
    const { name, value } = e.target;
    if (name === "min") setMinPrice(value);
    else setMaxPrice(value);
  }

  useEffect(() => {
    props.onFilterChange({
      categories: category,
      minPrice: Number(priceMin),
      maxPrice: Number(priceMax),
    });
  }, [category, minPrice, maxPrice]);

  return (
    <div className="w-full p-4 bg-gray-50 rounded-md shadow-sm sm:p-6">
      {/* Category Filter */}
      <section className="mb-6">
        <h3 className="text-sm font-semibold uppercase text-gray-700 mb-3">
          Category
        </h3>
        <div className="flex flex-col space-y-2 text-sm text-gray-800">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="men"
              value="Men"
              onChange={handleCategory}
              id="men"
            />
            <span>Men</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="women"
              value="Women"
              onChange={handleCategory}
              id="women"
            />
            <span>Women</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="unisex"
              value="Unisex"
              onChange={handleCategory}
              id="unisex"
            />
            <span>Unisex</span>
          </label>
        </div>
      </section>

      <section>
        <h4 className="text-sm font-semibold uppercase text-gray-700 mb-3">
          Price
        </h4>
        <div className="space-y-4">
          <div>
            <label
              htmlFor="minPrice"
              className="block text-xs font-medium text-gray-600 mb-1"
            >
              Min Price: ₹{priceMin}
            </label>
            <input
              type="range"
              min="100"
              max="3000"
              name="min"
              id="minPrice"
              step="10"
              value={priceMin}
              onChange={handlePrice}
              className="w-full accent-black"
            />
          </div>
          <div>
            <label
              htmlFor="maxPrice"
              className="block text-xs font-medium text-gray-600 mb-1"
            >
              Max Price: ₹{priceMax}
            </label>
            <input
              type="range"
              min="100"
              max="3000"
              name="max"
              id="maxPrice"
              step="10"
              value={priceMax}
              onChange={handlePrice}
              className="w-full accent-black"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default SideBar;
