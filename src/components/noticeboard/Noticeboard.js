import React, { Component } from "react";
import Notice from "./../notices/Notice";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";

class Noticeboard extends Component {
  render() {
    const { notices, auth, profile } = this.props;

    if (!auth.uid) return <Redirect to="/login" />;
    return (
      <div className="container" style={{ width: "60%" }}>
        {notices.map(notice => (
          <Notice
            key={notice.id}
            id={notice.id}
            city={notice.city}
            court={notice.court}
            type={notice.type}
            date={notice.date}
            hour={notice.hour}
            description={notice.description}
            contact={notice.contact}
            authorFirstName={notice.authorFirstName}
            authorLastName={notice.authorLastName}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notices: state.firestore.ordered.notices || state.notice.notices,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "notices" }])
)(Noticeboard);
