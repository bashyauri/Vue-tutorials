import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBjxw9GnmEkDKoxRb2I0dVUc4FiA2nE530",
  authDomain: "my-vue-firebase-site-dce6f.firebaseapp.com",
  projectId: "my-vue-firebase-site-dce6f",
  storageBucket: "my-vue-firebase-site-dce6f.appspot.com",
  messagingSenderId: "1022745557423",
  appId: "1:1022745557423:web:5552e921bbbcafd912175a",
};

// init firebase
firebase.initializeApp(firebaseConfig);
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.fieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timeStamp };
