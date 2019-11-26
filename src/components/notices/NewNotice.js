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
    this.props.history.push("/");
  };

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/login" />;

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
          <label htmlFor="hour">Godzina</label>
          <input type="time" id="hour" onChange={this.handleChange} />
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
