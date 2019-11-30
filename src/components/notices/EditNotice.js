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
        <form style={{ width: "80%" }} onSubmit={this.handleSubmit}>
          <h2>Edytuj ogłoszenie</h2>
          <label htmlFor="city">Miasto</label>
          <input
            type="text"
            id="city"
            onChange={this.handleChange}
            value={city}
          />
          <label htmlFor="court">Sąd</label>
          <input
            type="text"
            id="court"
            onChange={this.handleChange}
            value={court}
          />
          <label htmlFor="type">Rodzaj sprawy</label>
          <input
            type="text"
            id="type"
            onChange={this.handleChange}
            value={type}
          />
          <label htmlFor="date">Data</label>
          <input
            type="date"
            id="date"
            onChange={this.handleChange}
            value={date}
          />
          <label htmlFor="hour">Godzina</label>
          <input
            type="time"
            id="hour"
            onChange={this.handleChange}
            value={hour}
          />
          <label htmlFor="description">Opis:</label>
          <textarea
            type="text"
            id="description"
            style={{ resize: "none" }}
            onChange={this.handleChange}
            value={description}
          />
          <label htmlFor="contact">Dane kontaktowe</label>
          <input
            type="text"
            id="contact"
            onChange={this.handleChange}
            value={contact}
          />
          <button className="button is-link is-rounded is-small">
            Edytuj ogłoszenie
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
