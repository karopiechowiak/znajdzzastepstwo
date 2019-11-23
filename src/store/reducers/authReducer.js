const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      console.log("sukces");
      return {
        ...state,
        authError: null
      };
    case "LOGIN_ERROR":
      console.log("loginerror");
      return {
        ...state,
        authError: "Wystąpił problem z logowaniem"
      };
    case "LOGOUT_SUCCESS":
      console.log("wylogowano");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("utworzone nowe konto");
      return { ...state, authError: null };
    case "SIGNUP_ERROR":
      console.log("signup error", action.err);
      return { ...state, authError: action.err.message };
    default:
      return state;
  }
};

export default authReducer;
