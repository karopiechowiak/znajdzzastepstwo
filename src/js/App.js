import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./../components/layout/Navigation";
import css from "./../styles/style.css";
import Noticeboard from "./../components/noticeboard/Noticeboard.js";
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="bg">
          <Navigation />
          <Switch>
            <Route path="/" component={Noticeboard} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
