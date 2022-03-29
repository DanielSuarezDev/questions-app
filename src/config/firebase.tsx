// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.React_APP_FIREBASE_KEY,
  authDomain: process.env.React_APP_FIREBASE_DOMAIN,
  projectId: process.env.React_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.React_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.React_APP_FIREBASE_SENDER_ID,
  appId: process.env.React_APP_FIREBASE_APP_ID,
  measurementId: process.env.React_APP_FIREBASE_MEASUREMENT_ID,
}


export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const db = getFirestore(app);
export { db };
