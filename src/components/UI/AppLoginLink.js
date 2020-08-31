import React, { useContext } from "react";
import { UserContext } from "../../context/user";
import { CartContext } from "../../context/cart";
import AppNavLink from "./AppNavLink";
export default function AppLoginLink() {
  const { user, userLogout } = useContext(UserContext);
  const { clearCart } = useContext(CartContext);
  if (user.token) {
    return (
      <button
        className="block w-full lg:w-auto sm:text-center lg:inline-block py-6 px-8 text-xl hover:text-teal-600 capitalize"
        onClick={() => {
          userLogout();
          clearCart();
        }}
      >
        logout
      </button>
    );
  }
  return <AppNavLink to="/login" name="Login" />;
}
