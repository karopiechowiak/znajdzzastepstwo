const initState = {
  notices: [
    {
      id: "",
      city: "",
      court: "",
      type: "",
      date: "",
      hour: "",
      description: "",
      contact: ""
    }
  ]
};

const noticeReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_NEW_NOTICE":
      console.log("nowe ogłoszenie", action.notice);
      return state;
    case "ADD_NEW_NOTICE_ERROR":
      console.log("błąd", action.error);
      return state;
    default:
      return state;
  }
};

export default noticeReducer;
