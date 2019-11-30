import React, { Component } from "react";
import { connect } from "react-redux";
import { editNotice } from "./../../store/actions/noticeActions";

class EditNotice extends Component {
  state = {
    city: this.props.city,
    court: this.props.court,
    type: this.props.type,
    date: this.props.date,
    hour: this.props.hour,
    description: this.props.description,
    contact: this.props.contact
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    console.log("edit");
    e.preventDefault();
    this.props.handleEdit();
    this.props.editNotice(this.state, e.target.parentElement.parentElement.id);
  };

  render() {
    const { city, court, type, date, hour, description, contact } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h2 className="title is-6">Edytuj ogłoszenie</h2>
          <label htmlFor="city" className="label is-small">
            Miasto
          </label>
          <input
            type="text"
            id="city"
            onChange={this.handleChange}
            value={city}
            className="input is-small"
          />
          <label htmlFor="court" className="label is-small">
            Sąd
          </label>
          <input
            type="text"
            id="court"
            onChange={this.handleChange}
            value={court}
            className="input is-small"
          />
          <label htmlFor="type" className="label is-small">
            Rodzaj sprawy
          </label>
          <input
            type="text"
            id="type"
            onChange={this.handleChange}
            value={type}
            className="input is-small"
          />
          <label htmlFor="date" className="label is-small">
            Data
          </label>
          <input
            type="date"
            id="date"
            onChange={this.handleChange}
            value={date}
            className="input is-small"
          />
          <label htmlFor="hour" className="label is-small">
            Godzina
          </label>
          <input
            type="time"
            id="hour"
            onChange={this.handleChange}
            value={hour}
            className="input is-small"
          />
          <label htmlFor="description" className="label is-small">
            Opis:
          </label>
          <textarea
            type="text"
            id="description"
            style={{ resize: "none" }}
            onChange={this.handleChange}
            value={description}
            className="textarea is-small"
            rows="2"
          />
          <label htmlFor="contact" className="label is-small">
            Dane kontaktowe
          </label>
          <input
            type="text"
            id="contact"
            onChange={this.handleChange}
            value={contact}
            className="input is-small"
          />
          <button className="button is-info is-rounded is-small">
            Zapisz zmiany
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editNotice: (notice, id) => dispatch(editNotice(notice, id))
  };
};

export default connect(null, mapDispatchToProps)(EditNotice);
