import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBjxw9GnmEkDKoxRb2I0dVUc4FiA2nE530",
  authDomain: "my-vue-firebase-site-dce6f.firebaseapp.com",
  projectId: "my-vue-firebase-site-dce6f",
  storageBucket: "my-vue-firebase-site-dce6f.appspot.com",
  messagingSenderId: "1022745557423",
  appId: "1:1022745557423:web:ac2238ec114dd37f12175a",
};
// init firebase
firebase.initializeApp(firebaseConfig);
// init firestore service
const projectFirestore = firebase.firestore();

export { projectFirestore };
