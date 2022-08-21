import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
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
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timeStamp };
