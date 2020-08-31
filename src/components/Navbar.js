import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CartLink from "./Cart/CartLink";
import { UserContext } from "../context/user";
import AppNavLink from "./UI/AppNavLink";
import AppLoginLink from "./UI/AppLoginLink";
export default function Navbar() {
  const { user } = useContext(UserContext);
  const [open, setOpen] = useState(false);
  const hide = open ? "" : "hidden";
  return (
    <nav className="w-full h-auto shadow-lg mb-8">
      <div className="w-10/12 flex flex-wrap justify-between mx-auto items-center">
        <Link to="/" className="font-medium text-2xl tracking-tighter">
          <span className="text-teal-600 font-bold text-5xl">Retro</span>
          Tech
        </Link>
        <div className="block lg:hidden ">
          <button
            className="focus:outline-none text-teal-600"
            onClick={() => setOpen(!open)}
          >
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full block lg:flex lg:items-center lg:w-auto flex-grow justify-end ${hide}`}
        >
          <AppNavLink to="/" name="Home" />
          <AppNavLink to="/about" name="About" />
          <AppNavLink to="/products" name="Products" />
          {user.token && <AppNavLink to="/checkout" name="checkout" />}
          <AppLoginLink />
          <CartLink />
        </div>
      </div>
    </nav>
  );
}
