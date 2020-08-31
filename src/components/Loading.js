import React from "react";
import loading from "../assets/loading.svg";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen">
        <img
          className=""
          src={loading}
          alt=""
        />
    </div>
  );
}
