import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoggedInMenu from "./LoggedInMenu";
import LoggedOutMenu from "./LoggedOutMenu";

const Navigation = () => {
  return (
    <nav className="container">
      <div>
        <Link to="/" className="title" style={{ color: "white" }}>
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
