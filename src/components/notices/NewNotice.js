import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { addNewNotice } from "./../../store/actions/noticeActions";

class NewNotice extends Component {
  state = {
    city: "",
    court: "",
    type: "",
    date: "",
    hour: "",
    description: "",
    contact: "",
    editMenuActive: false
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewNotice(this.state);
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;

    return (
      <div>
        <form
          className="box container field"
          style={{ width: "40%", padding: "50px" }}
          onSubmit={this.handleSubmit}
        >
          <h2 className="title is-5">Nowe ogłoszenie</h2>
          <label htmlFor="city" className="label">
            Miasto
          </label>
          <input
            type="text"
            id="city"
            onChange={this.handleChange}
            className="input is-small"
          />
          <label htmlFor="court" className="label">
            Sąd
          </label>
          <input
            type="text"
            id="court"
            onChange={this.handleChange}
            className="input is-small"
          />
          <label htmlFor="type" className="label">
            Rodzaj sprawy
          </label>
          <input
            type="text"
            id="type"
            onChange={this.handleChange}
            className="input is-small"
          />
          <label htmlFor="date" className="label">
            Data
          </label>
          <input
            type="date"
            id="date"
            onChange={this.handleChange}
            className="input is-small"
          />
          <label htmlFor="hour" className="label">
            Godzina
          </label>
          <input
            type="time"
            id="hour"
            onChange={this.handleChange}
            className="input is-small"
          />
          <label htmlFor="description" className="label">
            Opis
          </label>
          <textarea
            type="text"
            id="description"
            style={{ resize: "none" }}
            onChange={this.handleChange}
            className="textarea is-small"
            rows="2"
          />
          <label htmlFor="contact" className="label">
            Dane kontaktowe
          </label>
          <input
            type="text"
            id="contact"
            onChange={this.handleChange}
            className="input is-small"
          />
          <button className="button is-link is-rounded is-small">
            Dodaj ogłoszenie
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addNewNotice: notice => dispatch(addNewNotice(notice))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewNotice);
