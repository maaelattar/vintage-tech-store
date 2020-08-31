import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import img from "../../assets/mainBcg.jpeg";
export default function Product({ image, title, id, price }) {
  return (
    <Link
      to={`products/${id}`}
      className="lg:max-w-sm xl:max-w-xs border shadow-xl hover:shadow-2xl transition duration-300"
    >
      <div className="relative">
        <img
          className="lg:max-w-sm xl:max-w-xs w-full h-64 border object-center object-cover"
          src={image || img}
          alt={title || "default title"}
        />
      </div>
      <div className="py-4">
        <p className="text-center tracking-wide text-lg font-medium">
          {title || "default title"}
        </p>
        <p className="text-center tracking-wide text-lg font-medium text-teal-600 mt-4">
          ${price || 0}
        </p>
      </div>
    </Link>
  );
}

Product.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};
