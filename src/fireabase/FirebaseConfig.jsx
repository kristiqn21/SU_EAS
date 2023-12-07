// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsPOEi7PzIs7w6BbKyd2zamTNBRRGFW4o",
  authDomain: "eas-shop.firebaseapp.com",
  projectId: "eas-shop",
  storageBucket: "eas-shop.appspot.com",
  messagingSenderId: "846618726449",
  appId: "1:846618726449:web:a84ebb9d8b7188ca568510"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}