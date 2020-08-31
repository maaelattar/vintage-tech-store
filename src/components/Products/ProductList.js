import React from "react";
import Product from "./Product";
import AppTitle from "../UI/AppTitle";

export default function ProductList({ title, products }) {
  return (
    <section className="w-10/12 mx-auto mb-12">
      <AppTitle
        title={title}
        className="text-center mb-8 transition-all ease-in-out"
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-y-8">
        {products.map((item) => {
          return <Product key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}
