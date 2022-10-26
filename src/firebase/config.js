import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyDioTWwwbv8SwQJ8XfT15LyrfXlUNElY_E",
  authDomain: "react-journal-93d21.firebaseapp.com",
  projectId: "react-journal-93d21",
  storageBucket: "react-journal-93d21.appspot.com",
  messagingSenderId: "527861838771",
  appId: "1:527861838771:web:e75f47b7241dbe4ee951c6"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);