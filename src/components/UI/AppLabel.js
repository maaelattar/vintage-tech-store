import React from "react";

export default function AppLabel({ name, forInput, className }) {
  return (
    <label
      className={`inline-block text-sm font-bold tracking-wide text-gray-700 uppercase mb-2 ${className}`}
      htmlFor={forInput}
    >
      {name}
    </label>
  );
}
