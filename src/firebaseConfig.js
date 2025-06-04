// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiobFLZA-tjvma0iY8xQ_NELcRqMxcAtA",
  authDomain: "intern-1108c.firebaseapp.com",
  projectId: "intern-1108c",
  storageBucket: "intern-1108c.firebasestorage.app",
  messagingSenderId: "988138738292",
  appId: "1:988138738292:web:77c474d21ffa92df247721"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };
