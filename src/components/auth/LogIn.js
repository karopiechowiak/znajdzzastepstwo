import React, { Component } from "react";

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
          <h2>Zaloguj się</h2>
          <label htmlFor="email">Adres e-mail</label>
          <input type="email" id="email" onChange={this.handleChange} />
          <label htmlFor="password">Hasło</label>
          <input type="password" id="password" onChange={this.handleChange} />
          <button>Zaloguj się</button>
        </form>
      </div>
    );
  }
}

export default LogIn;
