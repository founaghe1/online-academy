import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAQGwZ3Hm3ORR8DW_aaKwj0WIW42emoWzM",
  authDomain: "tache21-34aa0.firebaseapp.com",
  projectId: "tache21-34aa0",
  storageBucket: "tache21-34aa0.appspot.com",
  messagingSenderId: "159051967350",
  appId: "1:159051967350:web:4b41393c9c00279d84a857",
  measurementId: "G-G93DBCZVWQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
