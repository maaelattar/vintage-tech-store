import React, { useContext } from "react";
import { FaAngleDoubleUp } from "react-icons/fa";
import { UserContext } from "../context/user";

export default function ScrollButton() {
  const { height } = useContext(UserContext);
  const scrollBackToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <button
      className={
        height > 100
          ? "fixed bottom-0 right-0 m-12 bg-teal-600 text-white p-4 rounded animate-bounce z-20"
          : "hidden"
      }
      onClick={scrollBackToTop}
    >
      <FaAngleDoubleUp />
    </button>
  );
}
