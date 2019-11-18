import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoggedInMenu from "./LoggedInMenu";
import LoggedOutMenu from "./LoggedOutMenu";

const Navigation = () => {
  return (
    <nav className="container">
      <div>
        <Link to="/" className="title">
          Znajdź Zastępstwo
        </Link>
        <nav>
          <LoggedInMenu className="container" />
          <LoggedOutMenu />
        </nav>
      </div>
    </nav>
  );
};
export default Navigation;
