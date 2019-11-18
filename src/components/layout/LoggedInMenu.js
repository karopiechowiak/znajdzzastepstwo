import React from "react";
import { NavLink } from "react-router-dom";

const LoggedInMenu = () => {
  return (
    <ul className="buttons is-right">
      <li>
        <NavLink to="/" className="button is-rounded is-light">
          Nowe ogłoszenie
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="button is-rounded is-light">
          Wyloguj
        </NavLink>
      </li>
      <li>
        <NavLink to="/" className="button is-rounded is-light">
          KP
        </NavLink>
      </li>
    </ul>
  );
};

export default LoggedInMenu;
