import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyBFIDbnWq83H2PN8QIQk6IooZ58sVkSU2k",
  authDomain: "react-chat-a5696.firebaseapp.com",
  databaseURL: "https://react-chat-a5696.firebaseio.com",
  projectId: "react-chat-a5696",
  storageBucket: "react-chat-a5696.appspot.com",
  messagingSenderId: "307986255837",
  appId: "1:307986255837:web:05cddac90e86228c43f034",
  measurementId: "G-47MBB32JWG"
};

firebase.initializeApp(config);

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
