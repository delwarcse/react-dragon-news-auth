// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA32xObKnUSDexdPZ4UW_t8ANnwuTnAkrY",
  authDomain: "react-dragon-news-auth-475ca.firebaseapp.com",
  projectId: "react-dragon-news-auth-475ca",
  storageBucket: "react-dragon-news-auth-475ca.firebasestorage.app",
  messagingSenderId: "571240713766",
  appId: "1:571240713766:web:7fd5d86bb41f6720b820e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;