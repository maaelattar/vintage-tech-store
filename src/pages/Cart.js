import React, { useContext } from "react";
import { CartContext } from "../context/cart";
import { UserContext } from "../context/user";
import EmptyCart from "../components/Cart/EmptyCart";
import CartItem from "../components/Cart/CartItem";
import { Link } from "react-router-dom";
import AppTitle from "../components/UI/AppTitle";

export default function Cart() {
  const { cart, total } = useContext(CartContext);
  const { user } = useContext(UserContext);
  if (cart.length === 0) {
    return <EmptyCart />;
  }
  return (
    <section className="w-10/12 mx-auto pb-12">
      <AppTitle title="your cart" className="text-center mb-8" />
      <div className="grid col-1 lg:grid-cols-2 lg:gap-x-2 xl:gap-x-4 gap-y-8">
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>

      <h2 className="text-center text-2xl font-bold capitalize py-8">
        total: ${total}
      </h2>

      <Link
        to="/checkout"
        className="uppercase w-1/2 mx-auto bg-teal-600 text-white text-lg border rounded-lg px-3 py-2 block text-center hover:bg-transparent hover:text-teal-600 hover:border-teal-600 focus:outline-none transition duration-200"
      >
        {user.token ? "checkout" : "login"}
      </Link>
    </section>
  );
}
