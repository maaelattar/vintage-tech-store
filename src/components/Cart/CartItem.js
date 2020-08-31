import React, { useContext } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { CartContext } from "../../context/cart";
export default function CartItem({ id, image, title, price, amount }) {
  const { removeItem, increaseAmount, decreaseAmount } = useContext(
    CartContext
  );

  return (
    <div className="lg:max-w-sm xl:max-w-lg flex flex-col flex-grow border rounded-lg shadow-xl hover:shadow-2xl transition duration-300">
      <img
        className="w-full h-64 border object-center object-cover"
        src={image || image}
        alt={title || "default title"}
      />
      <div className="py-4 h-48">
        <p className="text-center tracking-wide text-lg font-medium mt-4">
          {title || "default title"}
        </p>
        <p className="text-center tracking-wide text-lg font-medium text-teal-600 mt-4">
          ${price || 0}
        </p>

        <div className="flex flex-row px-4 py-2 justify-around mt-4">
          <button
            type="button"
            className="focus:outline-none text-teal-600"
            onClick={() => {
              decreaseAmount(id, amount);
            }}
          >
            <FaMinus />
          </button>

          <p className="item-amount">{amount}</p>

          <button
            type="button"
            className="focus:outline-none text-teal-600"
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
        className="block w-full bg-red-600 text-white text-center font-bold uppercase"
        onClick={() => {
          removeItem(id);
        }}
      >
        remove
      </button>
    </div>
  );
}
