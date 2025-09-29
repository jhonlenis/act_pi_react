// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-uvBfdzKkJ7jkp7_XxJjUd0rAux_ElfI",
  authDomain: "chismofilia-fc6da.firebaseapp.com",
  projectId: "chismofilia-fc6da",
  storageBucket: "chismofilia-fc6da.firebasestorage.app",
  messagingSenderId: "449712488316",
  appId: "1:449712488316:web:55c8ccbd565e2b42192ef9",
  measurementId: "G-6SPR179SFM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();
