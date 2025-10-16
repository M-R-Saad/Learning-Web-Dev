// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFAW9L1l1u54knUnz9wI62NAf_8ny4kv8",
  authDomain: "fir-auth-4b8c5.firebaseapp.com",
  projectId: "fir-auth-4b8c5",
  storageBucket: "fir-auth-4b8c5.firebasestorage.app",
  messagingSenderId: "691524133613",
  appId: "1:691524133613:web:220d97b53b22961e33e2e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth;