// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyBJqSePbHjvYwEcOwLmyeqAF_a6ftbBwv0",
  authDomain: "movieshub-9b84b.firebaseapp.com",
  projectId: "movieshub-9b84b",
  storageBucket: "movieshub-9b84b.appspot.com",
  messagingSenderId: "74427104059",
  appId: "1:74427104059:web:a4dbded82a99e5faa8d51e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app;