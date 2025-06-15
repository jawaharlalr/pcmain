// uploadProducts.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import products from "./src/data/products"; // Update this path if needed

// ✅ Firebase Config (same as your firebase.js)
const firebaseConfig = {
  apiKey: "AIzaSyDyJBUh4wIHO58Z6drDY94DieztYDrlEA4",
  authDomain: "poncrackersshop-fbfd3.firebaseapp.com",
  projectId: "poncrackersshop-fbfd3",
  storageBucket: "poncrackersshop-fbfd3.appspot.com",
  messagingSenderId: "334392020942",
  appId: "1:334392020942:web:8fa1d48dad1d0f7c4e259f",
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// ✅ Upload products
const uploadProducts = async () => {
  const productsRef = collection(db, "products");
  for (const product of products) {
    try {
      await addDoc(productsRef, product);
      console.log(`✅ Uploaded: ${product.name}`);
    } catch (err) {
      console.error(`❌ Failed to upload ${product.name}:`, err);
    }
  }
};

uploadProducts();
