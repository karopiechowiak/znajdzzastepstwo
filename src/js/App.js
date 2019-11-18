import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./../components/layout/Navigation";
import css from "./../styles/style.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div
          className="bg"
          // style={{
          //   background: "linear-gradient(133deg, #f32b94, #0025f0)",
          //   backgroundSize: "400% 400%",
          //   height: "100vh",
          //   animation: "bgAnimation 27s ease infinite",
          //  " @keyframes bgAnimation {
          //    0% {
          //      backgroundPosition: 2% 0%;
          //    }
          //    50% {
          //      background-position: 99% 100%;
          //    }
          //    100% {
          //      background-position: 2% 0%;
          //    }
          //  }"
          // }}
        >
          <Navigation />
        </div>
      </BrowserRouter>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
