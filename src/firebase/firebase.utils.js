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

export const addChannel = async (channelName, currentUser) => {
  const channelRef = firestore.collection("channel").doc();

  const { displayName, photoURL } = currentUser;
  const createdAt = new Date();

  try {
    await channelRef.set({
      channelName,
      createdAt,
      createdBy: {
        displayName,
        photoURL
      }
    });
  } catch (error) {
    console.log("error creating channel", error.message);
  }
  return channelRef;
};

export const convertChannelsSnapShotToMap = channels => {
  const transformedChannel = channels.docs.map(doc => {
    const { channelName, createdAt, createdBy } = doc.data();
    return {
      id: doc.id,
      channelName,
      createdAt,
      createdBy
    };
  });
  return transformedChannel;
};

export const sendMessage = async (content, currentUser, currentChannel) => {
  if (content.length <= 0) return;
  const messageRef = firestore
    .collection("channel")
    .doc(currentChannel.id)
    .collection("message")
    .doc();

  const { displayName, photoURL, id } = currentUser;
  const timestamp = new Date().getTime();
  try {
    await messageRef.set({
      content,
      timestamp,
      id,
      displayName,
      photoURL
    });
  } catch (error) {
    console.log("error creating messages", error.message);
  }
  return messageRef;
};

export const messageListener = messages => {
  if (!messages) return;
  const addListener = messages.docs.map(doc => {
    const { content, id, photoURL, displayName, timestamp } = doc.data();
    return {
      id: doc.id,
      content,
      userId: id,
      photoURL,
      displayName,
      timestamp
    };
  });
  return addListener;
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
