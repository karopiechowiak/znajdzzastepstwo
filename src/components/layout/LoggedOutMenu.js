import React from "react";
import { NavLink } from "react-router-dom";

const LoggedOutMenu = () => {
  return (
    <ul className="buttons is-right">
      <li>
        <NavLink to="/" className="button is-rounded is-light">
          Załóż konto
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="button is-rounded is-light">
          Zaloguj się
        </NavLink>
      </li>
    </ul>
  );
};

export default LoggedOutMenu;
