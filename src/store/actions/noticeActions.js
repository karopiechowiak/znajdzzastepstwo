export const addNewNotice = notice => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("notices")
      .add({
        ...notice,
        authorFirstName: "Paragraf",
        authorLastName: "Paragrafowski",
        authorId: 123456,
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
