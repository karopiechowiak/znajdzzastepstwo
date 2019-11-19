import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./../components/layout/Navigation";
import css from "./../styles/style.css";
import Noticeboard from "./../components/noticeboard/Noticeboard.js";
import LogIn from "./../components/auth/LogIn";
import SignUp from "./../components/auth/SignUp";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="bg">
          <Navigation />
          <Switch>
            <Route exact path="/" component={Noticeboard} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
