import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0AC2a47naMYgyDvawZe6q91761WU6yAI",
  authDomain: "clone-9a4d5.firebaseapp.com",
  databaseURL: "https://clone-9a4d5.firebaseio.com",
  projectId: "clone-9a4d5",
  storageBucket: "clone-9a4d5.appspot.com",
  messagingSenderId: "931963552528",
  appId: "1:931963552528:web:37a4f87534d1715ac2db95",
  measurementId: "G-VYMPF5QB9N",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {db, auth};
