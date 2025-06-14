// src/utils/loginAdmin.js
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const loginAdmin = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (user.email === "poncrackers25@gmail.com") {
      console.log("✅ Admin logged in:", user.email);
      alert(`Welcome, ${user.email}`);
      return user;
    } else {
      alert("Access denied: Not an admin.");
      return null;
    }
  } catch (err) {
    console.error("❌ Login failed:", err.code, err.message);

    let message = "Login failed. Please try again.";
    if (err.code === "auth/user-not-found") {
      message = "No admin found with this email.";
    } else if (err.code === "auth/wrong-password") {
      message = "Incorrect password.";
    } else if (err.code === "auth/invalid-email") {
      message = "Invalid email format.";
    }

    alert(message);
    return null;
  }
};

export default loginAdmin;
