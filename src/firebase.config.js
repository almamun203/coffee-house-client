// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQxnFU_lho0bfIVjD74-rVSjVe_OZ86F0",
  authDomain: "coffee-house-auth-97850.firebaseapp.com",
  projectId: "coffee-house-auth-97850",
  storageBucket: "coffee-house-auth-97850.appspot.com",
  messagingSenderId: "701079833901",
  appId: "1:701079833901:web:4e34122a8bac39263ed7a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;