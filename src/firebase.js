import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAyKNYeJ2p3eRDmkKYnuc3BIJc58FlhP7M",
  authDomain: "clone-ed564.firebaseapp.com",
  projectId: "clone-ed564",
  storageBucket: "clone-ed564.appspot.com",
  messagingSenderId: "15519266643",
  appId: "1:15519266643:web:93d2f9c839f497a01b53a6",
  measurementId: "G-WM6GD6GBPG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
