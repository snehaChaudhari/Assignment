// import * as firebase from "firebase";
// import 'firebase/storage';
// const config = {
//     apiKey: "AIzaSyCMOZ-uXzrdRyjNVdxaPIqQEjd3iP6tqYw",
//     authDomain: "assignment-af149.firebaseapp.com",
//     databaseURL: "https://assignment-af149.firebaseio.com",
//     projectId: "assignment-af149",
//     storageBucket: "assignment-af149.appspot.com",
//     messagingSenderId: "335723039368",
//     appId: "1:335723039368:web:e6979ff5b4109a10802d3d",
//     measurementId: "G-2XB5BJ7174"

// };
// // export default 
// class Firebase {
//   static USER_DB = "List";

//   static auth;
//   static database;

//   static init() {
//     if (!firebase.apps.length) {
//    firebase.initializeApp(config);
//    }
//    else{
//      firebase.app();
//    }
//    Firebase.auth = firebase.auth()
//    Firebase.database = firebase.database()
//    Firebase.storage = firebase.storage()
//   //  Firebase.messaging = firebase.messaging()

//   }

//   get uid() {
//     return (firebase.auth().currentUser || {}).uid;
//   }

//   get ref() {
//     return firebase.database().ref('Messages');
//   }

//   parse = snapshot => {
//     const { timestamp: numberStamp, text, user } = snapshot.val();
//     const { key: id } = snapshot;
//     const { key: _id } = snapshot; //needed for giftedchat
//     const timestamp = new Date(numberStamp);

//     const message = {
//       id,
//       _id,
//       timestamp,
//       text,
//       user,
//     };
//     return message;
//   };

//   refOn = callback => {
//     this.ref
//       .limitToLast(20)
//       .on('child_added', snapshot => callback(this.parse(snapshot)));
//   }

//   get timestamp() {
//     return firebase.database.ServerValue.TIMESTAMP;
//   }
  
//   // send the message to the Backend
//   send = messages => {
//     for (let i = 0; i < messages.length; i++) {
//       const { text, user } = messages[i];
//       const message = {
//         text,
//         user,
//         createdAt: this.timestamp,
//       };
//       this.ref.push(message);
//     }
//   };

//   refOff() {
//     this.ref.off();
//   }

// }
// export default Firebase;



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
