// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-proj-9b601.firebaseapp.com",
  projectId: "auth-proj-9b601",
  storageBucket: "auth-proj-9b601.appspot.com",
  messagingSenderId: "173461077822",
  appId: "1:173461077822:web:e2197cbf358c2b9fbeb66f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
