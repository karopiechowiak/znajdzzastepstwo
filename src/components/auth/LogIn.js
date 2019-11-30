import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { logIn } from "./../../store/actions/authActions";

class LogIn extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.logIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;

    return (
      <div className="box container" style={{ width: "60%" }}>
        <form onSubmit={this.handleSubmit}>
          <h2 className="title is-5">Zaloguj się</h2>
          <label htmlFor="email" className="label">
            Adres e-mail
          </label>
          <input
            type="email"
            id="email"
            onChange={this.handleChange}
            className="input"
          />
          <label htmlFor="password" className="label">
            Hasło
          </label>
          <input
            type="password"
            id="password"
            onChange={this.handleChange}
            className="input"
          />
          <button className="button is-rounded is-info">Zaloguj się</button>
        </form>
        <div>{authError ? <p>{authError}</p> : null}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logIn: credentials => dispatch(logIn(credentials))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
