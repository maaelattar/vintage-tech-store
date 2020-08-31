import React, { useContext } from "react";
import { FaWindowClose } from "react-icons/fa";
import { UserContext } from "../context/user";
export default function Alert() {
  const { alert, hideAlert } = useContext(UserContext);

  let css = alert.show ? "block" : "hidden";
  css += alert.type === "danger" ? " bg-red-600" : " bg-teal-600";

  return (
    <div
      className={`fixed z-10 inline-block text-white py-6 px-4 mt-12 ml-12 rounded-lg border-4 border-current text-center focus:outline-none transition duration-300 ${css}`}
    >
      <p>{alert.show && alert.msg}</p>
      <button className="absolute top-0 left-0" onClick={hideAlert}>
        <FaWindowClose />
      </button>
    </div>
  );
}
