// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBv05kvXwx4IRDnr2URQ_xf8c32EMwW98o",
  authDomain: "regispro-7fb9d.firebaseapp.com",
  projectId: "regispro-7fb9d",
  storageBucket: "regispro-7fb9d.appspot.com",
  messagingSenderId: "192967229169",
  appId: "1:192967229169:web:b30bb6398c6605b9df3350",
};

//to initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
