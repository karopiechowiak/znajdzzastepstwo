import React, { Component } from "react";
import Notice from "./../notices/Notice";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import firebase from "firebase/app";
// import "firebase/auth";

class Noticeboard extends Component {
  render() {
    const { notices } = this.props;
    console.log(notices);
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
  console.log(state);
  return {
    notices: state.firestore.ordered.notices || state.notice.notices
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "notices" }])
)(Noticeboard);
