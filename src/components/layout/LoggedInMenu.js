import React from "react";
import { NavLink } from "react-router-dom";

const LoggedInMenu = () => {
  return (
    <ul className="buttons is-right">
      <li>
        <NavLink
          to="/"
          className="button is-link is-inverted is-outlined is-rounded"
        >
          Nowe ogłoszenie
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className="button is-link is-inverted is-outlined is-rounded"
        >
          Wyloguj
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className="button is-link is-inverted is-outlined is-rounded"
        >
          KP
        </NavLink>
      </li>
    </ul>
  );
};

export default LoggedInMenu;
