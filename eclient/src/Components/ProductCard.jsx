function ProductCard({ product }) {
  return (
    <>
      <div>
        <img
          className="w-full h-60 object-contain rounded-xl mb-4"
          src={`${product.image}`}
          alt={product.name}
        />

        <div className="flex-1">
          <h3 className="text-lg font-medium text-center mb-2">
            {product.name}
          </h3>
          <p className="text-xl font-semibold text-gray-800 text-center mb-4">
            ₹{product.price}
          </p>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
