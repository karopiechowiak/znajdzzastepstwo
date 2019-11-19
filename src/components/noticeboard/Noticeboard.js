import React, { Component } from "react";
import Notice from "./../notices/Notice";
import { connect } from "react-redux";

class Noticeboard extends Component {
  render() {
    console.log(this.props.notices);
    const { notices } = this.props;
    return (
      <div className="container" style={{ width: "60%" }}>
        {notices.map(notice => (
          <Notice
            key={notice.id}
            city={notice.city}
            court={notice.court}
            type={notice.type}
            date={notice.date}
            hour={notice.hour}
            description={notice.description}
            contact={notice.contact}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notices: state.notice.notices
  };
};

export default connect(mapStateToProps)(Noticeboard);
