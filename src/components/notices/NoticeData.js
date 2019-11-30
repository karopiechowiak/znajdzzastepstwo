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
      <p>
        Miasto:
        <b> {city}</b>
      </p>
      <p>
        Sąd:<b> {court}</b>
      </p>
      <p>
        Rodzaj sprawy: <b>{type}</b>
      </p>
      <p>
        Data: <b>{date}</b>
      </p>
      <p>
        Godzina: <b>{hour}</b>
      </p>
      <p>
        Opis: <b>{description}</b>
      </p>
      <p>
        Dane kontaktowe:<b> {contact}</b>
      </p>
      <p>
        Utworzone przez:{" "}
        <b>
          {authorFirstName} {authorLastName}
        </b>
      </p>
    </div>
  );
};

export default NoticeData;
