import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyARn-WkOGBWFfmaEsrJI4T6dEusP4Zms0I",
  authDomain: "znajdzzastepstwo.firebaseapp.com",
  databaseURL: "https://znajdzzastepstwo.firebaseio.com",
  projectId: "znajdzzastepstwo",
  storageBucket: "znajdzzastepstwo.appspot.com",
  messagingSenderId: "1034808941831",
  appId: "1:1034808941831:web:c3eaac081d36c88929b9a2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
