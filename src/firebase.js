import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// ✅ Your Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyJBUh4wIHO58Z6drDY94DieztYDrlEA4",
  authDomain: "poncrackersshop-fbfd3.firebaseapp.com",
  projectId: "poncrackersshop-fbfd3",
  storageBucket: "poncrackersshop-fbfd3.appspot.com", // ❗ corrected from .app to .appspot.com
  messagingSenderId: "334392020942",
  appId: "1:334392020942:web:8fa1d48dad1d0f7c4e259f"
};

// ✅ Initialize Firebase App
const app = initializeApp(firebaseConfig);

// ✅ Export Firestore and Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
