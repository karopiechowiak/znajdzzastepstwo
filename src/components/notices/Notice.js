import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteNotice, editNotice } from "./../../store/actions/noticeActions";
import EditNotice from "./../notices/EditNotice";

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
      <div className="box" id={id}>
        {!this.state.editMenuActive && (
          <div>
            <p>Miasto: {city}</p>
            <p>Sąd: {court}</p>
            <p>Rodzaj sprawy: {type}</p>
            <p>Data: {date}</p>
            <p>Godzina: {hour}</p>
            <p>Opis: {description}</p>
            <p>Dane kontaktowe: {contact}</p>
            <p>
              Utworzone przez: {authorFirstName} {authorLastName}
            </p>
          </div>
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
          <button onClick={this.toggleEdit}>
            {this.state.editMenuActive ? "Anuluj" : "Edytuj"}
          </button>
        ) : null}
        {authorId === currentUserId ? (
          <button onClick={this.handleDelete}>Usuń</button>
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
