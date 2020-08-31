import React from "react";
import { Link } from "react-router-dom";
import AppTitle from "../UI/AppTitle";

export default function EmptyCart() {
  return (
    <section className="w-10/12 mx-auto ">
      <AppTitle title="empty cart..." className="text-center" />
      <div className="text-center mt-8">
        <Link
          to="/products"
          className="uppercase bg-teal-600 text-white text-lg border rounded-lg px-3 py-2 hover:bg-transparent hover:text-teal-600 hover:border-teal-600 focus:outline-none transition duration-200 "
        >
          fill it
        </Link>
      </div>
    </section>
  );
}
