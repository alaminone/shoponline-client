// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDabUDc63r9nsO-p80SwW0crnwfEZX1eIs",
  authDomain: "shoponline-7d1c0.firebaseapp.com",
  projectId: "shoponline-7d1c0",
  storageBucket: "shoponline-7d1c0.appspot.com",
  messagingSenderId: "251322078503",
  appId: "1:251322078503:web:1a67456e1acbee91758502"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const globalAuth = getAuth(app);
export default globalAuth;