import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoggedInMenu from "./LoggedInMenu";
import LoggedOutMenu from "./LoggedOutMenu";
import { connect } from "react-redux";

const Navigation = props => {
  const { auth } = props;
  const menuLinks = auth.uid ? <LoggedInMenu /> : <LoggedOutMenu />;
  return (
    <nav className="container">
      <div>
        <Link to="/" className="title" style={{ color: "white" }}>
          Znajdź Zastępstwo
        </Link>
        <nav>{menuLinks}</nav>
      </div>
    </nav>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Navigation);
