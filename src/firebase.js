// firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// ✅ Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyJBUh4wIHO58Z6drDY94DieztYDrlEA4",
  authDomain: "poncrackersshop-fbfd3.firebaseapp.com",
  projectId: "poncrackersshop-fbfd3",
  storageBucket: "poncrackersshop-fbfd3.appspot.com",
  messagingSenderId: "334392020942",
  appId: "1:334392020942:web:8fa1d48dad1d0f7c4e259f"
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Export Firebase Services
export const db = getFirestore(app);       // Firestore
export const auth = getAuth(app);           // Firebase Auth
export const storage = getStorage(app);     // Firebase Storage
export default app;                         // Optional: export app if needed elsewhere
