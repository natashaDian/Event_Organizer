// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBis0JTpWMCwQvabed_QF1C4Gaa0IkLdbw",
  authDomain: "eventorganizer-88f60.firebaseapp.com",
  projectId: "eventorganizer-88f60",
  storageBucket: "eventorganizer-88f60.firebasestorage.app",
  messagingSenderId: "1078594683973",
  appId: "1:1078594683973:web:87e2079ea78a552f4d0f2c",
  measurementId: "G-635H5L4KGL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export  { db, auth };
export default app;