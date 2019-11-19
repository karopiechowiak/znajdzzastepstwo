import React, { Component } from "react";

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
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <form
          className="box container"
          style={{ width: "60%" }}
          onSubmit={this.handleSubmit}
        >
          <h2>Zarejestruj się</h2>
          <label htmlFor="email">Adres e-mail</label>
          <input type="email" id="email" onChange={this.handleChange} />
          <label htmlFor="password">Hasło</label>
          <input type="password" id="password" onChange={this.handleChange} />
          <label htmlFor="firstName">Imię</label>
          <input type="text" id="firstName" onChange={this.handleChange} />
          <label htmlFor="lastName">Nazwisko</label>
          <input type="text" id="lastName" onChange={this.handleChange} />
          <label htmlFor="organisation">
            Siedziba Okręgowej Izby Radcowskiej/Rady Adwokackiej
          </label>
          <input type="text" id="organisation" onChange={this.handleChange} />
          <label htmlFor="lawyerId">Numer legitymacji</label>
          <input type="lawyerId" id="lawyerId" onChange={this.handleChange} />
          <button>Zaloguj się</button>
        </form>
      </div>
    );
  }
}

export default SignUp;
