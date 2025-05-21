import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      const totalInCart = existingItem.quantity;
      if (totalInCart <= product.stock) {
        setCartItems((prev) =>
          prev.map((p) =>
            p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
          )
        );
      }
    } else if (product.stock > 0) {
      setCartItems((prev) => [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
          stock: product.stock,
        },
      ]);
    }
  };

  const decreaseItem = (id) => {
    const quantityTemp = cartItems.find(
      (item) => item.id === id && item.quantity > 1
    );

    if (quantityTemp) {
      setCartItems((prev) =>
        prev.map((p) => (p.id === id ? { ...p, quantity: p.quantity - 1 } : p))
      );
    } else {
      removeFromCart(id);
    }
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((product) => product.id !== id));
  };

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        clearCart,
        addToCart,
        removeFromCart,
        decreaseItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
