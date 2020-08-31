import React, { useContext } from "react";
import { ProductContext } from "../context/products";
import ProductList from "./Products/ProductList";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import AppTitle from "./UI/AppTitle";
export default function PageProducts() {
  const { sorted, page, changePage } = useContext(ProductContext);
  if (sorted[page]) {
    return (
      <>
        <ProductList products={sorted[page]} />;
        {sorted.length > 1 && (
          <article className="w-4/12 lg:w-2/12 mx-auto mb-16 mt-8 flex flex-row items-center leading-none">
            <div className="w-8 h-8">
              {page > 0 && (
                <button
                  className="text-teal-600 text-3xl focus:outline-none"
                  onClick={() => {
                    changePage(page - 1);
                  }}
                >
                  <FaAngleDoubleLeft />
                </button>
              )}
            </div>

            <div>
              {sorted.map((_, index) => {
                return (
                  <button
                    onClick={() => changePage(index)}
                    key={index}
                    className={`${
                      page === index
                        ? "bg-teal-600 text-white rounded"
                        : "text-teal-600 "
                    } focus:outline-none text-2xl p-2`}
                  >
                    {index + 1}
                  </button>
                );
              })}
            </div>
            <div className="w-8 h-8">
              {page < sorted.length - 1 && (
                <button
                  className="text-teal-600 text-3xl focus:outline-none"
                  onClick={() => {
                    changePage(page + 1);
                  }}
                >
                  <FaAngleDoubleRight />
                </button>
              )}
            </div>
          </article>
        )}
      </>
    );
  } else {
    return (
      <AppTitle title="unfortunately your search query did not return any products" />
    );
  }
}
