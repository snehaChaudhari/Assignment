
import * as firebase from "firebase";
const config = {
  apiKey: "AIzaSyCMOZ-uXzrdRyjNVdxaPIqQEjd3iP6tqYw",
  authDomain: "assignment-af149.firebaseapp.com",
  databaseURL: "https://assignment-af149.firebaseio.com",
  projectId: "assignment-af149",
  storageBucket: "assignment-af149.appspot.com",
  messagingSenderId: "335723039368",
  // appId: "1:335723039368:web:e6979ff5b4109a10802d3d",
  // measurementId: "G-2XB5BJ7174"
};

export default class Firebase {
  static USER_DB = "List";

  static auth;
  static database;
  static init() {
    if (!firebase.apps.length) {
   firebase.initializeApp(config);
   }
   else{
     firebase.app();
   }
   Firebase.auth = firebase.auth()
   Firebase.database = firebase.database()
  }
}
