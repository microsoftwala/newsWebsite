// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBwyzB5ayj64NI56V4kYuioSnBd6HThKwU",
  authDomain: "news-5d14e.firebaseapp.com",
  projectId: "news-5d14e",
  storageBucket: "news-5d14e.appspot.com",
  messagingSenderId: "242711990965",
  appId: "1:242711990965:web:63db62f10e593296f664fc",
  measurementId: "G-BPMH4YEJS3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { app, auth };
