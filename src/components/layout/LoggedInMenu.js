import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { logOut } from "./../../store/actions/authActions";

const LoggedInMenu = props => {
  return (
    <ul className="buttons is-right">
      <li>
        <NavLink
          to="/newnotice"
          className="button is-link is-inverted is-outlined is-rounded"
        >
          Nowe ogłoszenie
        </NavLink>
      </li>
      <li>
        <a
          className="button is-link is-inverted is-outlined is-rounded"
          onClick={props.logOut}
        >
          Wyloguj się
        </a>
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

const mapDispatchToProps = dispatch => {
  return {
    logOut: () => dispatch(logOut())
  };
};

export default connect(null, mapDispatchToProps)(LoggedInMenu);
