// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoje-5RWCaMsEG33batc7t01Puo9JJaM8",

  authDomain: "Hotel Maya Kakchiquel-6dff5.firebaseapp.com",

  projectId: "Hotel Maya Kakchiquel-6dff5",

  storageBucket: "Hotel Maya Kakchiquel-6dff5.firebasestorage.app",

  messagingSenderId: "627074058893",

  appId: "1:627074058893:web:34583e2f418f18b828b0c4",

  measurementId: "G-EKDVET05QZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
//const analytics = getAnalytics(app);

export { db, storage, auth };
