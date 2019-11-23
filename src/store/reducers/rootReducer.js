import authReducer from "./authReducer";
import noticeReducer from "./noticeReducer";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";

const rootReducer = combineReducers({
  auth: authReducer,
  notice: noticeReducer,
  firestore: firestoreReducer
});

export default rootReducer;
