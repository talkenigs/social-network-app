import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAv9s8cSiPlUa8twEVTfPXm5mpio7STIsY",
    authDomain: "social-app-35f28.firebaseapp.com",
    projectId: "social-app-35f28",
    storageBucket: "social-app-35f28.appspot.com",
    messagingSenderId: "516270372131",
    appId: "1:516270372131:web:e3f64e5fc7cf18e3684896"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = getStorage(firebaseApp);

  export { auth, provider, storage};
  export default db;