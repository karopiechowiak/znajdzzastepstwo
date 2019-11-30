import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { firebase } from "react-redux-firebase";
import { signUp } from "./../../store/actions/authActions";
import { runInThisContext } from "vm";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    organisation: "",
    lawyerId: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  };

  render() {
    const { auth, authError } = this.props;

    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="box container" style={{ width: "60%" }}>
        <form onSubmit={this.handleSubmit}>
          <h2 className="title is-5">Zarejestruj się</h2>
          <label htmlFor="email" className="label">
            Adres e-mail
          </label>
          <input
            type="email"
            id="email"
            onChange={this.handleChange}
            className="input is-small"
          />
          <label htmlFor="password" className="label">
            Hasło
          </label>
          <input
            type="password"
            id="password"
            onChange={this.handleChange}
            className="input is-small"
          />
          <label htmlFor="firstName" className="label">
            Imię
          </label>
          <input
            type="text"
            id="firstName"
            onChange={this.handleChange}
            className="input is-small"
          />
          <label htmlFor="lastName" className="label">
            Nazwisko
          </label>
          <input
            type="text"
            id="lastName"
            onChange={this.handleChange}
            className="input is-small"
          />
          <label htmlFor="organisation" className="label">
            Siedziba Okręgowej Izby Radcowskiej/Rady Adwokackiej
          </label>
          <input
            type="text"
            id="organisation"
            onChange={this.handleChange}
            className="input is-small"
          />
          <label htmlFor="lawyerId" className="label">
            Numer legitymacji
          </label>
          <input
            type="lawyerId"
            id="lawyerId"
            onChange={this.handleChange}
            className="input is-small"
          />
          <button className="button is-rounded is-info is-small">
            Zarejestruj się
          </button>
        </form>
        {authError ? <p>{authError}</p> : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
