// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDN7UT4aQz4JDZBrAhMiIME1pCAP2mNuc0",
  authDomain: "shakuf-timeline.firebaseapp.com",
  projectId: "shakuf-timeline",
  storageBucket: "shakuf-timeline.appspot.com",
  messagingSenderId: "700766376060",
  appId: "1:700766376060:web:f2f9bb0ed484735756b9f9"
};

// Initialize Firebase
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(app);
