import React, { createContext, useState, useEffect, useReducer } from "react";
import reducer from "./reducer";
import { REMOVE, ADD_TO_CART, CLEAR_CART, DECREASE, INCREASE } from "./actions";
function getCartFromLocalStorage() {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
}

const CartContext = createContext();
function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(reducer, getCartFromLocalStorage());
  const [total, setTotal] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    let newCartItems = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount);
    }, 0);
    setCartItems(newCartItems);
    let newTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem.price);
    }, 0);
    newTotal = parseFloat(newTotal.toFixed(2));
    setTotal(newTotal);
  }, [cart]);

  const removeItem = (id) => {
    dispatch({ type: REMOVE, payload: id });
  };
  const increaseAmount = (id) => {
    dispatch({ type: INCREASE, payload: id });
  };
  const decreaseAmount = (id, amount) => {
    if (amount === 1) {
      dispatch({ type: REMOVE, payload: id });
      return;
    } else {
      dispatch({ type: DECREASE, payload: id });
    }
  };
  const addToCart = (product) => {
    const item = [...cart].find((item) => item.id === product.id);
    if (item) {
      dispatch({ type: INCREASE, payload: product.id });
    } else {
      dispatch({ type: ADD_TO_CART, payload: product });
    }
  };
  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItems,
        removeItem,
        increaseAmount,
        decreaseAmount,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export { CartContext, CartProvider };
