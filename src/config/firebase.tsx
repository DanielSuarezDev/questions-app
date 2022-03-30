import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.React_APP_FIREBASE_KEY,
  authDomain: process.env.React_APP_FIREBASE_DOMAIN,
  projectId: process.env.React_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.React_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.React_APP_FIREBASE_SENDER_ID,
  appId: process.env.React_APP_FIREBASE_APP_ID,
  measurementId: process.env.React_APP_FIREBASE_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const db = getFirestore(app);
export { db };
