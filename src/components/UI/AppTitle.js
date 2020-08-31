import React from "react";

export default function AppTitle({ title, className }) {
  return (
    <h1
      className={`text-3xl font-bold tracking-widest capitalize ${className}`}
    >
      {title}
    </h1>
  );
}
