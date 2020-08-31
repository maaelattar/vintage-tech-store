import React, { useContext } from "react";
import { ProductContext } from "../../context/products";
import AppTitle from "../UI/AppTitle";
import AppLabel from "../UI/AppLabel";

const Filters = () => {
  const {
    filters: { search, category, shipping, price },
    updateFilters,
    sorted,
  } = useContext(ProductContext);
  return (
    <section className="w-10/12 mx-auto">
      <AppTitle title="search products" className="text-center mb-4" />
      <form>
        <div className="flex flex-col items-center">
          <div className="w-1/2 mb-6">
            <AppLabel name="search term" forInput="search" />
            <input
              className="shadow appearance-none block border bg-gray-200 border-gray-200 text-gray-700 focus:outline-none focus:bg-white focus:border-gray-500 rounded leading-tight py-4 px-4 w-full"
              placeholder="Search"
              type="text"
              id="search"
              name="search"
              value={search}
              onChange={updateFilters}
            />
          </div>
          <div className="w-1/2 mb-6">
            <AppLabel name="category" forInput="category" />
            <select
              className="shadow appearance-none block border bg-gray-100 border-gray-200 text-gray-700 focus:outline-none rounded leading-tight py-4 px-4 w-full text-lg tracking-wide"
              name="category"
              id="category"
              value={category}
              onChange={updateFilters}
            >
              <option value="all">all</option>
              <option value="phone">phone</option>
              <option value="computer">computer</option>
              <option value="radio">radio</option>
            </select>
          </div>
          <div className="w-1/2 mb-6 flex flex-row">
            <AppLabel name="free shipping" forInput="shipping" />

            <input
              className="border-gray-700 w-6 h-6 ml-2"
              type="checkbox"
              name="shipping"
              id="shipping"
              checked={shipping}
              onChange={updateFilters}
            />
          </div>
          <div className="w-1/2 mb-6">
            <p className="text-base font-bold text-gray-800 tracking-wide uppercase pb-4">
              price
            </p>
            <div className="flex flex-row">
              <AppLabel name="all" forInput="price1" />
              <input
                className="ml-1 border-gray-700 w-5 h-5"
                type="radio"
                name="price"
                id="price1"
                value="all"
                checked={price === "all"}
                onChange={updateFilters}
              />
            </div>
            <div className="flex flex-row">
              <AppLabel name="$0 - $300" forInput="price2" />
              <input
                className="ml-1 border-gray-700 w-5 h-5"
                type="radio"
                name="price"
                id="price2"
                value="0"
                checked={price === 0}
                onChange={updateFilters}
              />
            </div>

            <div className="flex flex-row">
              <AppLabel name="$300 - $650" forInput="price3" />
              <input
                className="ml-1 border-gray-700 w-5 h-5"
                type="radio"
                name="price"
                id="price3"
                value="300"
                checked={price === 300}
                onChange={updateFilters}
              />
            </div>

            <div className="flex flex-row">
              <AppLabel name="Over $650" forInput="price4" />
              <input
                className="ml-1 border-gray-700 w-5 h-5"
                type="radio"
                name="price"
                id="price4"
                value="650"
                checked={price === 650}
                onChange={updateFilters}
              />
            </div>
          </div>
        </div>
      </form>
      <h6 className="w-1/2 text-2xl font-bold text-gray-800 capitalize text-center mx-auto mb-4">
        total products : {sorted.flat().length}
      </h6>
      <hr />
    </section>
  );
};
export default Filters;
