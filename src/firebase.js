import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBZ3CnhaW1Si-q1L6-j1JgZbojHj_5V3bA",
  authDomain: "disneyplus-fc481.firebaseapp.com",
  projectId: "disneyplus-fc481",
  storageBucket: "disneyplus-fc481.appspot.com",
  messagingSenderId: "633004457021",
  appId: "1:633004457021:web:8ccf2c9d32d51f7bc33e54",
  measurementId: "G-NVV0BETR30"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
// const storage = firebase.storage();

export { db, auth, provider, storage };
