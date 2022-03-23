// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyVoik5RLyBIp-elw0Kjsc09Be5Dxt0wQ",
  authDomain: "questions-cf057.firebaseapp.com",
  projectId: "questions-cf057",
  storageBucket: "questions-cf057.appspot.com",
  messagingSenderId: "258915972753",
  appId: "1:258915972753:web:f84e3e2dd5e536dce5b130",
  measurementId: "G-S1B88B3PS8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const analytics = getAnalytics(app);
