import React from "react";
import { Link } from "react-router-dom";
import AppTitle from "../components/UI/AppTitle";

export default function Error() {
  return (
    <section className="w-8/12 m-auto ">
      <AppTitle title="oops! it's a dead end" className="text-center" />
      <div className="text-center p-12">
        <Link
          to="/"
          className="inline-block uppercase bg-teal-600 text-white text-lg border rounded-lg px-3 py-2 hover:bg-transparent hover:text-teal-600 hover:border-teal-600 focus:outline-none transition duration-200"
        >
          back home
        </Link>
      </div>
    </section>
  );
}
