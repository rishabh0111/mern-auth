// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-4a299.firebaseapp.com",
  projectId: "mern-auth-4a299",
  storageBucket: "mern-auth-4a299.appspot.com",
  messagingSenderId: "1079682921740",
  appId: "1:1079682921740:web:00ec1d63271c762ff70529"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);