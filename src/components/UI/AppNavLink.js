import React from "react";
import { NavLink } from "react-router-dom";

export default function AppNavLink({ name, to, children, className }) {
  return (
    <NavLink
      exact={true}
      activeClassName="text-teal-600 border-b-4 border-teal-600"
      className={`block sm:text-center lg:inline-block py-6 px-8 text-xl hover:text-teal-600 capitalize ${className}`}
      to={to}
    >
      {name}
      {children}
    </NavLink>
  );
}
