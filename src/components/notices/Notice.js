import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteNotice, editNotice } from "./../../store/actions/noticeActions";
import EditNotice from "./../notices/EditNotice";
import NoticeData from "./../notices/NoticeData";

class Notice extends Component {
  state = {
    editMenuActive: false
  };

  handleDelete = e => {
    this.props.deleteNotice(e);
  };

  toggleEdit = () => {
    this.setState({ editMenuActive: !this.state.editMenuActive });
  };

  handleEdit = e => {
    this.setState({ editMenuActive: !this.state.editMenuActive });
    console.log(this.state.editMenuActive);
  };

  render() {
    const {
      id,
      city,
      court,
      type,
      date,
      hour,
      description,
      contact,
      authorFirstName,
      authorLastName,
      authorId,
      currentUserId
    } = this.props;

    return (
      <div className="box " id={id}>
        {!this.state.editMenuActive && (
          <NoticeData
            city={city}
            court={court}
            type={type}
            date={date}
            hour={hour}
            description={description}
            contact={contact}
            authorFirstName={authorFirstName}
            authorLastName={authorLastName}
          />
        )}
        {this.state.editMenuActive && (
          <EditNotice
            city={city}
            court={court}
            type={type}
            date={date}
            hour={hour}
            description={description}
            contact={contact}
            handleEdit={this.handleEdit}
          />
        )}

        {authorId === currentUserId ? (
          <button
            onClick={this.toggleEdit}
            className="button is-small is-link is-rounded"
          >
            {this.state.editMenuActive ? "Anuluj" : "Edytuj"}
          </button>
        ) : null}
        {authorId === currentUserId ? (
          <button
            onClick={this.handleDelete}
            className="button is-small is-danger is-rounded "
          >
            Usuń
          </button>
        ) : null}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteNotice: e => dispatch(deleteNotice(e))
  };
};

export default connect(null, mapDispatchToProps)(Notice);
