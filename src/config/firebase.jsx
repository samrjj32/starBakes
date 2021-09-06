import firebase from "firebase";
console.log(
  process.env.REACT_APP_FIREBASE_API_KEY,
  process.env.MESSAGE_SENDER_ID,
  process.env.FIREBASE_APP_ID
);
const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyBwOVIixSgc_Jiaqb8enS23DvHbIbm1Lkw",
  authDomain: "starbakes-cb612.firebaseapp.com",
  projectId: "starbakes-cb612",
  storageBucket: "starbakes-cb612.appspot.com",
  messagingSenderId: "724179157264",
  appId: "1:724179157264:web:1fa92ae0fda72b15ffe595",
});
// FIREBASE_API_KEY
// MESSAGE_SENDER_ID
// FIREBASE_APP_ID

const auth = firebase.auth();
const db = firebaseConfig.firestore();

export { db, auth };
