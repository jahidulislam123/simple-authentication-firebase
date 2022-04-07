// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA02qAyhGEU7tTTbvcH1A950C2LfdlpRIY",
  authDomain: "simple-authentication-fi-ac61a.firebaseapp.com",
  projectId: "simple-authentication-fi-ac61a",
  storageBucket: "simple-authentication-fi-ac61a.appspot.com",
  messagingSenderId: "820268594924",
  appId: "1:820268594924:web:a2acf8d8ed86b13d9ed7c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;