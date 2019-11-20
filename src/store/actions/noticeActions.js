export const addNewNotice = notice => {
  return (dispatch, getState) => {
    dispatch({
      type: "ADD_NEW_NOTICE",
      notice
    });
  };
};
