import React from "react";
import { connect } from "react-redux";
import { deleteNotice } from "./../../store/actions/noticeActions";

const Notice = props => {
  const {
    id,
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

  const handleDelete = e => {
    console.log("usuwanie", e.target.parentElement.id);
    props.deleteNotice(e);
  };

  return (
    <div className="box" id={id}>
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
      <button onClick={handleDelete}>Usuń</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteNotice: e => dispatch(deleteNotice(e))
  };
};

export default connect(null, mapDispatchToProps)(Notice);
