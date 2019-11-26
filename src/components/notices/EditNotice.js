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
    e.preventDefault();
    this.props.editNotice(this.state, e.target.parentElement.parentElement.id);
    //  this.props.history.push("/");
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <form
          className="box container"
          style={{ width: "60%" }}
          onSubmit={this.handleSubmit}
        >
          <h2>Nowe ogłoszenie</h2>
          <label htmlFor="city">Miasto</label>
          <input
            type="text"
            id="city"
            onChange={this.handleChange}
            value={this.state.city}
          />
          <label htmlFor="court">Sąd</label>
          <input
            type="text"
            id="court"
            onChange={this.handleChange}
            value={this.state.court}
          />
          <label htmlFor="type">Rodzaj sprawy</label>
          <input type="text" id="type" onChange={this.handleChange} />
          <label htmlFor="date">Data</label>
          <input type="date" id="date" onChange={this.handleChange} />
          <label htmlFor="time">Godzina</label>
          <input type="time" id="time" onChange={this.handleChange} />
          <label htmlFor="description">Opis:</label>
          <textarea
            type="text"
            id="description"
            style={{ resize: "none" }}
            onChange={this.handleChange}
          />
          <label htmlFor="contact">Dane kontaktowe</label>
          <input type="text" id="contact" onChange={this.handleChange} />
          <button>Edytuj ogłoszenie</button>
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
