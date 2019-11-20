import React, { Component } from "react";
import { connect } from "react-redux";
import { addNewNotice } from "./../../store/actions/noticeActions";

class NewNotice extends Component {
  state = {
    city: "",
    court: "",
    type: "",
    date: "",
    hour: "",
    description: "",
    contact: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewNotice(this.state);
  };

  render() {
    return (
      <div>
        <form
          className="box container"
          style={{ width: "60%" }}
          onSubmit={this.handleSubmit}
        >
          <h2>Nowe ogłoszenie</h2>
          <label htmlFor="city">Miasto</label>
          <input type="text" id="city" onChange={this.handleChange} />
          <label htmlFor="court">Sąd</label>
          <input type="text" id="court" onChange={this.handleChange} />
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
          <button>Dodaj ogłoszenie</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewNotice: notice => dispatch(addNewNotice(notice))
  };
};
export default connect(null, mapDispatchToProps)(NewNotice);
