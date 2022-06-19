import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
const firebaseConfig = {
    apiKey: "AIzaSyDpERNQFl1Lp8R-X8KzGMnpbpI7K5spNuc",
    authDomain: "journal-app-4b8ff.firebaseapp.com",
    projectId: "journal-app-4b8ff",
    storageBucket: "journal-app-4b8ff.appspot.com",
    messagingSenderId: "97038231503",
    appId: "1:97038231503:web:ceb4ec7b5d092148d6d4ba"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}