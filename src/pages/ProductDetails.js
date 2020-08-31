import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/products";
import { useHistory } from "react-router-dom";
import Loading from "../components/Loading";
import { CartContext } from "../context/cart";
import AppTitle from "../components/UI/AppTitle";

export default function ProductDetails() {
  const { id } = useParams();
  const history = useHistory();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);
  const product = products.find((item) => item.id === parseInt(id));
  if (products.length === 0) {
    return <Loading />;
  } else {
    const { image, title, price, description } = product;
    return (
      <section className="w-10/12 m-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/3 flex">
          <img
            src={image}
            alt={title}
            className="w-full object-center object-cover rounded-lg shadow-2xl my-auto"
          />
        </div>
        <article className="w-full lg:w-2/3 pl-12">
          <AppTitle title={title} className="text-center lg:text-left" />
          <h2 className="text-2xl font-semibold text-teal-600 my-4 text-center lg:text-left">
            ${price}
          </h2>
          <p className="text-xl font-medium tracking-wide leading-relaxed">
            {description}
          </p>
          <button
            className="uppercase bg-teal-600 text-white text-lg border w-full rounded-lg px-3 py-2 block hover:bg-transparent hover:text-teal-600 hover:border-teal-600 focus:outline-none transition duration-200"
            onClick={() => {
              addToCart(product);
              history.push("/cart");
            }}
          >
            add to cart
          </button>
        </article>
      </section>
    );
  }
}
