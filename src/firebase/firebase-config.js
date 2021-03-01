import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC3Gj6F3H_D4GKR5_4zOFJTRCTM-3WoVRY",
    authDomain: "web-react-food.firebaseapp.com",
    projectId: "web-react-food",
    storageBucket: "web-react-food.appspot.com",
    messagingSenderId: "999724384764",
    appId: "1:999724384764:web:3de9d49617ec7006d97279",
    measurementId: "G-W06YS8XP87"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}