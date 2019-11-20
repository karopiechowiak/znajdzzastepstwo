const initState = {
  notices: [
    {
      id: "1",
      city: "Poznań",
      court: "SO",
      type: "rozwód",
      date: "22.11.2019",
      hour: "9:00",
      description: "Posiedzenie informacyjne",
      contact: "242-123-123"
    },
    {
      id: "2",
      city: "Warszawa",
      court: "SR Czerniakowska",
      type: "gospodarcza o zapłatę",
      date: "12.12.2019 r.",
      hour: "14:00",
      description: "przesłuchanie świadka",
      contact: "mecenas@mecenasipartnerzy.com"
    },
    {
      id: "3",
      city: "Szczecin",
      court: "SO",
      type: "karna",
      date: "02.03.2020 r.",
      hour: "11:15",
      description: "wysłuchanie oskarżonego",
      contact: "987-987-987"
    }
  ]
};

const noticeReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_NEW_NOTICE":
      console.log("nowe ogłoszenie", action.notice);
  }
  return state;
};

export default noticeReducer;
