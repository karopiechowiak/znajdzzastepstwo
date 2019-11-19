import React, { Component } from "react";
import Notice from "./../notices/Notice";

class Noticeboard extends Component {
  render() {
    return (
      <div className="container" style={{ width: "60%" }}>
        <Notice />
        <Notice />
      </div>
    );
  }
}

export default Noticeboard;
