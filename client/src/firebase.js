// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2140f.firebaseapp.com",
  projectId: "mern-estate-2140f",
  storageBucket: "mern-estate-2140f.appspot.com",
  messagingSenderId: "537779848023",
  appId: "1:537779848023:web:fda15da8855337de9b3412"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);