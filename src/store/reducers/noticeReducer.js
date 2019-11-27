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
      console.log("błąd dodawania ogłoszenia", action.error);
      return state;
    case "DELETE_NOTICE":
      console.log("usunięto ogłoszenie o id", action.deleteId);
      return state;
    case "DELETE_NOTICE_ERROR":
      console.log("błąd usuwania ogłoszenia", action.error);
      return state;
    case "EDIT_NOTICE":
      console.log("edytowano ogłoszenie", action.notice);
      return state;
    case "EDIT_NOTICE_ERROR":
      console.log("błąd edytowania ogłoszenia", action.error);
      return state;
    default:
      return state;
  }
};

export default noticeReducer;
