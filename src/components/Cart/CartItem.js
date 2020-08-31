import React, { useContext } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { CartContext } from "../../context/cart";
export default function CartItem({ id, image, title, price, amount }) {
  const { removeItem, increaseAmount, decreaseAmount } = useContext(
    CartContext
  );

  return (
    <div className="flex flex-col flex-grow transition duration-300 border rounded-lg shadow-xl lg:max-w-sm xl:max-w-lg hover:shadow-2xl">
      <img
        className="object-cover object-center w-full h-64 border"
        src={image || image}
        alt={title || "default title"}
      />
      <div className="h-48 py-4">
        <p className="mt-4 text-lg font-medium tracking-wide text-center">
          {title || "default title"}
        </p>
        <p className="mt-4 text-lg font-medium tracking-wide text-center text-teal-600">
          ${price || 0}
        </p>

        <div className="flex flex-row justify-around px-4 py-2 mt-4">
          <button
            type="button"
            className="text-teal-600 focus:outline-none"
            onClick={() => {
              decreaseAmount(id, amount);
            }}
          >
            <FaMinus />
          </button>

          <p className="item-amount">{amount}</p>

          <button
            type="button"
            className="text-teal-600 focus:outline-none"
            onClick={() => {
              increaseAmount(id);
            }}
          >
            <FaPlus />
          </button>
        </div>
      </div>
      <button
        type="button"
        className="block w-full font-bold text-center text-white uppercase bg-red-600"
        onClick={() => {
          removeItem(id);
        }}
      >
        remove
      </button>
    </div>
  );
}
