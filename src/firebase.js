import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCAQa77GH7yK7QYgNockPgrYvo8b689_6g",
  authDomain: "netflix-clone-ad67d.firebaseapp.com",
  projectId: "netflix-clone-ad67d",
  storageBucket: "netflix-clone-ad67d.appspot.com",
  messagingSenderId: "380674520187",
  appId: "1:380674520187:web:b94e036ac7edbd1ac11ede",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
