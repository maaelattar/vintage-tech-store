import React, { useContext } from "react";
import { CartContext } from "../../context/cart";
import AppNavLink from "../UI/AppNavLink";

export default function CartLink() {
  const { cartItems } = useContext(CartContext);
  return (
    <AppNavLink to="/cart" name="Cart" className="relative">
      <span
        className="bg-teal-600 text-white text-sm rounded-full h-6 w-6 inline-flex justify-center items-center absolute"
        style={{ top: "1px" }}
      >
        {cartItems}
      </span>
    </AppNavLink>
  );
}
