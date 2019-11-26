import React from "react";
import { connect } from "react-redux";
import { deleteNotice, editNotice } from "./../../store/actions/noticeActions";
import EditNotice from "./../notices/EditNotice";

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
    authorLastName,
    authorId,
    currentUserId
  } = props;
  console.log(props);

  const handleDelete = e => {
    console.log("usuwanie", e.target.parentElement.id);
    props.deleteNotice(e);
  };

  const handleEdit = e => {
    console.log("edytowanie");
    props.editNotice(e);
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
      {authorId === currentUserId ? (
        <button onClick={handleEdit}>Edytuj</button>
      ) : null}
      {authorId === currentUserId ? (
        <button onClick={handleDelete}>Usuń</button>
      ) : null}
      <EditNotice
        city={city}
        court={court}
        type={type}
        date={date}
        hour={hour}
        description={description}
        contact={contact}
      />
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    deleteNotice: e => dispatch(deleteNotice(e)),
    editNotice: e => dispatch(editNotice(e))
  };
};

export default connect(null, mapDispatchToProps)(Notice);
