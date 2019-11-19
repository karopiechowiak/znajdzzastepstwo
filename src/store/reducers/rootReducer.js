import authReducer from "./authReducer";
import noticeReducer from "./noticesReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  notice: noticeReducer
});

export default rootReducer;
