import React, { Component } from "react";
import { Link } from "react-router-dom";
import LoggedInMenu from "./LoggedInMenu";
import LoggedOutMenu from "./LoggedOutMenu";
import { connect } from "react-redux";

const Navigation = props => {
  const { auth, profile } = props;
  const menuLinks = auth.uid ? (
    <LoggedInMenu profile={profile} />
  ) : (
    <LoggedOutMenu />
  );
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
  console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(Navigation);
