import React from "react";
import { NavLink } from "react-router-dom";

const LoggedOutMenu = () => {
  return (
    <ul className="buttons is-right">
      <li>
        <NavLink
          to="/"
          className="button is-link is-inverted is-outlined is-rounded"
        >
          Załóż konto
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className="button is-link is-inverted is-outlined is-rounded"
        >
          Zaloguj się
        </NavLink>
      </li>
    </ul>
  );
};

export default LoggedOutMenu;
