import React, { Component } from "react";
import Notice from "./Notice.js";

class Noticeboard extends Component {
  render() {
    return (
      <div className="container">
        <Notice />
        <Notice />
      </div>
    );
  }
}

export default Noticeboard;
