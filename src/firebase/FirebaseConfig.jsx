// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


// Import the functions you need from the SDKs you need

const firebaseConfig = {
  apiKey: "AIzaSyAMhf8q7fiwR6lXJAeQ021jLe6Ay5df5qo",
  authDomain: "myeco-eed1c.firebaseapp.com",
  projectId: "myeco-eed1c",
  storageBucket: "myeco-eed1c.appspot.com",
  messagingSenderId: "574187643442",
  appId: "1:574187643442:web:0b712e95543c8c5ead922b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }