import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAB69COaQ1s6Iq5giWCfiPeDnfJaoMC-vM",
  authDomain: "grad-school-6f0a8.firebaseapp.com",
  projectId: "grad-school-6f0a8",
  storageBucket: "grad-school-6f0a8.appspot.com",
  messagingSenderId: "453594020668",
  appId: "1:453594020668:web:edcbf4ab67e241f2f97c39",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider, db };
