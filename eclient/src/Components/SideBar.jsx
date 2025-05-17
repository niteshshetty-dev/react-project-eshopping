import { useState, useEffect } from "react";

function SideBar(props) {
  const [category, setCategory] = useState([]);
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(3000);
  const priceMin = Math.min(minPrice, maxPrice);
  const priceMax = Math.max(minPrice, maxPrice);

  function handleCategory(e) {
    if (!category.includes(e.target.value))
      setCategory((prev) => [...prev, e.target.value]);
    else {
      setCategory((prev) => prev.filter((cat) => cat !== e.target.value));
    }
  }

  function handlePrice(e) {
    if (e.target.name === "min") {
      setMinPrice(e.target.value);
    } else setMaxPrice(e.target.value);
  }

  useEffect(() => {
    props.onFilterChange({
      categories: category,
      minPrice: Number(minPrice),
      maxPrice: Number(maxPrice),
    });
  }, [category, minPrice, maxPrice]);

  return (
    <>
      <div>
        <div>
          <h3>Category</h3>
          <label htmlFor="men">Men :</label>
          <input
            type="checkbox"
            name="men"
            value="Men"
            onChange={handleCategory}
          />
          <label htmlFor="women">Women :</label>
          <input
            type="checkbox"
            name="women"
            value="Women"
            onChange={handleCategory}
          />
          <label htmlFor="unisex">Unisex :</label>
          <input
            type="checkbox"
            name="unisex"
            value="Unisex"
            onChange={handleCategory}
          />
        </div>

        <div>
          <h4>Price</h4>
          <input
            type="range"
            min="100"
            max="3000"
            name="min"
            step="10"
            value={priceMin}
            onChange={handlePrice}
          ></input>
          {priceMin}
          <input
            type="range"
            min="100"
            max="3000"
            name="max"
            value={priceMax}
            onChange={handlePrice}
          ></input>
          {priceMax}
        </div>
      </div>
    </>
  );
}

export default SideBar;
