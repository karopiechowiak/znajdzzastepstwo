import { db } from "./../../firebase/firebaseConfig";

export const addNewNotice = notice => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;

    firestore
      .collection("notices")
      .add({
        ...notice,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({
          type: "ADD_NEW_NOTICE",
          notice
        });
      })
      .catch(error => {
        dispatch({ type: "ADD_NEW_NOTICE_ERROR", error });
      });
  };
};

export const deleteNotice = e => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const deleteId = e.target.parentElement.id;
    db.collection("notices")
      .doc(deleteId)
      .delete()
      .then(() => {
        dispatch({
          type: "DELETE_NOTICE",
          deleteId
        });
      })
      .catch(err => {
        dispatch({ type: "DELETE_NOTICE_ERROR", err });
      });
  };
};
