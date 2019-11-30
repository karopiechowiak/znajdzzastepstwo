import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./../components/layout/Navigation";
import Noticeboard from "./../components/noticeboard/Noticeboard.js";
import LogIn from "./../components/auth/LogIn";
import SignUp from "./../components/auth/SignUp";
import NewNotice from "./../components/notices/NewNotice";
import Aside from "./../components/layout/Aside";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="bg">
          <Aside />
          <Navigation />
          <Switch>
            <Route exact path="/" component={Noticeboard} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/newnotice" component={NewNotice} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
