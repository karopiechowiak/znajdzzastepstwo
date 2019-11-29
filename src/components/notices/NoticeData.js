import React, { Component } from "react";

const NoticeData = props => {
  const {
    city,
    court,
    type,
    date,
    hour,
    description,
    contact,
    authorFirstName,
    authorLastName
  } = props;

  return (
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
  );
};

export default NoticeData;
