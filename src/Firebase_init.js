// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD59Fr1U0yYgzAJguCCE6684XdYYtgpVEI",
  authDomain: "dragon-news-81d35.firebaseapp.com",
  projectId: "dragon-news-81d35",
  storageBucket: "dragon-news-81d35.firebasestorage.app",
  messagingSenderId: "1083842111650",
  appId: "1:1083842111650:web:70de5ebc4ed2dcc7034ffb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;