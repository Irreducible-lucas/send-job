// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyATZx1ZVR6RrTEcmt90zmR0aw15G6Lps1o",
  authDomain: "sync-e80c5.firebaseapp.com",
  projectId: "sync-e80c5",
  storageBucket: "sync-e80c5.firebasestorage.app",
  messagingSenderId: "158740103339",
  appId: "1:158740103339:web:424ff611546b0ea9c237ee",
  measurementId: "G-EYC85K0RJQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
