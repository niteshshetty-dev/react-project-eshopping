import { useState } from "react";

function SideBar() {
  const [category, setCategory] = useState([]);
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(3000);

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

  return (
    <>
      <div>
        <div>
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
        {category}
        <div>
          <input
            type="range"
            min="100"
            max="3000"
            name="min"
            step="10"
            value={Math.max(minPrice, 0)}
            onChange={handlePrice}
          ></input>
          {minPrice}
          <input
            type="range"
            min="100"
            max="3000"
            name="max"
            value={Math.min(maxPrice, 3000)}
            onChange={handlePrice}
          ></input>
          {maxPrice}
        </div>
      </div>
    </>
  );
}

export default SideBar;
