import products from "../../data/Products";

function ProductCard() {
  return (
    <>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductCard;
