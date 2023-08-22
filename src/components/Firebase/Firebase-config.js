import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBhMIypv7xMVXreCthzi1o9SXfELzgvs28",
  authDomain: "online-academy-ff30d.firebaseapp.com",
  projectId: "online-academy-ff30d",
  storageBucket: "online-academy-ff30d.appspot.com",
  messagingSenderId: "238220299624",
  appId: "1:238220299624:web:b705486cce9ccb667d5add",
  measurementId: "G-Q3G1ZQHWDK"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);