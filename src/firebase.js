// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore}from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAg62Z1lU7lX1FI5SkV2nK1wsEMRebHAqo",
    authDomain: "blog-with-firebase-19696.firebaseapp.com",
    projectId: "blog-with-firebase-19696",
    storageBucket: "blog-with-firebase-19696.firebasestorage.app",
    messagingSenderId: "280668534063",
    appId: "1:280668534063:web:abc0943ba7f35bc079ddda",
    measurementId: "G-TNR8Q88YZY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { db,provider,auth };
