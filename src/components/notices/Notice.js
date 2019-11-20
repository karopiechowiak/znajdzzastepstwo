import React, { Component } from "react";

class Notice extends Component {
  render() {
    console.log(this.props);

    const { city, court, type, date, hour, description, contact } = this.props;

    return (
      <div className="box">
        <p>Miasto: {city}</p>
        <p>Sąd: {court}</p>
        <p>Rodzaj sprawy: {type}</p>
        <p>Data: {date}</p>
        <p>Godzina: {hour}</p>
        <p>Opis: {description}</p>
        <p>Dane kontaktowe: {contact}</p>
      </div>
    );
  }
}

export default Notice;
