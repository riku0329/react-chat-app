import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/database";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyCRI0WR6e-yjZAvMuECDnSVgCb7aooJZUo",
  authDomain: "react-chat-aa0cc.firebaseapp.com",
  databaseURL: "https://react-chat-aa0cc.firebaseio.com",
  projectId: "react-chat-aa0cc",
  storageBucket: "react-chat-aa0cc.appspot.com",
  messagingSenderId: "439024085554",
  appId: "1:439024085554:web:cce3bf16fc595bd47faa2b",
  measurementId: "G-79M4S58F15"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
