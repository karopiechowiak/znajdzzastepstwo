import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import css from "./../styles/style.css";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import firebaseConfig from "./../firebase/firebaseConfig";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      thunk.withExtraArgument({
        getFirebase,
        getFirestore
      })
    ),
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig, {
      useFirestoreForProfile: true,
      userProfile: "users",
      attachAuthIsReady: true
    })
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
