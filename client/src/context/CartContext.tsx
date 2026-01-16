"use client";

import React, { createContext, useContext, useState } from "react";

const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product: any) => {
    setCart((prevCart): any => {
      const isExist = prevCart.find((item: any) => item.id === product.id);

      if (isExist) {
        return prevCart.map((item: any) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: any) => {
    setCart((prev) => prev.filter((item: any) => item.id !== id));
  };

  const cartCount = cart.length;

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
