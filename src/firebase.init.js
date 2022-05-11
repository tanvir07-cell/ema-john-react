// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLauyQtLkWhFEfmwt-VwCrMpC7gwU0MQg",
  authDomain: "ema-john-simple-auth-c8f63.firebaseapp.com",
  projectId: "ema-john-simple-auth-c8f63",
  storageBucket: "ema-john-simple-auth-c8f63.appspot.com",
  messagingSenderId: "306860028466",
  appId: "1:306860028466:web:82e49262800d3249be022b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
