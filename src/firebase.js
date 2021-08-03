import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD5wLnt2ecvt-KFKvQbm5uTgJ3SpIXSkek",
  authDomain: "gradschool-hunt.firebaseapp.com",
  projectId: "gradschool-hunt",
  storageBucket: "gradschool-hunt.appspot.com",
  messagingSenderId: "460381949311",
  appId: "1:460381949311:web:f8466cd0a495b72ef39e4a"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider, db };
