

import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7351zdx5fKcRQkJ_8XnpsWExVOUQh1Dg",
  authDomain: "courajouter.firebaseapp.com",
  projectId: "courajouter",
  storageBucket: "courajouter.appspot.com",
  messagingSenderId: "46226482320",
  appId: "1:46226482320:web:8629e7ab4107058bb12415",
  measurementId: "G-13XVGPW3HM",
};


const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app); 
