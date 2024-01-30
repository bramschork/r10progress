import { initializeApp } from "firebase/app";
import { browserSessionPersistence, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyCswYpaLv8w7n1DPA5So539BV6QbHcuecs",

  authDomain: "r10progress-f91bc.firebaseapp.com",

  projectId: "r10progress-f91bc",

  storageBucket: "r10progress-f91bc.appspot.com",
  

  messagingSenderId: "204516761585",

  appId: "1:204516761585:web:8971f06db717fd871aee50",


  measurementId: "G-FJ9NJ2F8BH"

};


export const firebaseApp = initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
export const auth = getAuth(firebaseApp);
auth.setPersistence(browserSessionPersistence);
