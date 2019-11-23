import React from "react";

const Notice = props => {
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
  console.log(props);
  return (
    <div className="box">
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
      <p></p>
    </div>
  );
};

export default Notice;
