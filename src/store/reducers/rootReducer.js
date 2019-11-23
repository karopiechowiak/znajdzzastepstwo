import authReducer from "./authReducer";
import noticeReducer from "./noticeReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
  auth: authReducer,
  notice: noticeReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer;
