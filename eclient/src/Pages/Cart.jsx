import { useCart } from "../context/CartContext";

function Cart() {
  const { cartItems, decreaseItem, addToCart } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {cartItems.map((product) => (
                <div
                  key={product.id}
                  className="shadow-md rounded-xl p-4 sm:p-6 lg:p-8"
                >
                  <img
                    className="w-full h-60 object-contain rounded-xl"
                    src={`${product.image}`}
                    alt={product.name}
                  />

                  <h3 className="text-lg font-medium mt-4 text-center">
                    {product.name}
                  </h3>
                  <p className="text-xl font-semibold text-gray-800 text-center">
                    ₹{product.price}
                  </p>

                  <div className="flex justify-center mt-4">
                    <div className="flex items-center space-x-2">
                      <button
                        className="bg-black px-4 py-2 rounded-sm"
                        type="button"
                        onClick={() => decreaseItem(product.id)}
                      >
                        <span className="text-white font-semibold">-</span>
                      </button>
                      <p className="text-xl text-black px-4">
                        {product.quantity}
                      </p>
                      <button
                        className="bg-black px-4 py-2 rounded-sm"
                        type="button"
                        onClick={() => addToCart(product)}
                      >
                        <span className="text-white font-semibold">+</span>
                      </button>
                    </div>
                  </div>

                  {product.quantity > product.stock && (
                    <p className="text-red-600 text-sm text-center mt-4">
                      Out of stock
                    </p>
                  )}
                </div>
              ))}
            </div>

            <div className="bg-white rounded shadow-md p-6 h-fit text-center">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <p className="text-gray-700 mb-2">Total Items: {totalItems}</p>
              <p className="text-gray-700 font-semibold text-lg">
                Total: ₹{totalAmount}
              </p>
              <button className="mt-6 bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-600 mt-8">No products found.</p>
      )}
    </>
  );
}

export default Cart;
