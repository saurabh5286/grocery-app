import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyBHfbrY4GcdmGbayn_RUIn6Io2B6TnG-_Q",
  authDomain: "grocery-store-reactnext-yatish.firebaseapp.com",
  projectId: "grocery-store-reactnext-yatish",
  storageBucket: "grocery-store-reactnext-yatish.firebasestorage.app",
  messagingSenderId: "",
  appId: ""
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Export auth for authentication
export const db = getFirestore(app); // Export Firestore instance
