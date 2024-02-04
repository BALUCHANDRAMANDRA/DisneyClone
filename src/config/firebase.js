// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore, collection } from 'firebase/firestore'; // Import collection method

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVlpmT-rXoh3rKaLdX6CYTF4P0XNpz2DQ",
  authDomain: "disneyplus-clone-618d7.firebaseapp.com",
  projectId: "disneyplus-clone-618d7",
  storageBucket: "disneyplus-clone-618d7.appspot.com",
  messagingSenderId: "202430423231",
  appId: "1:202430423231:web:f92756cc5c79eac590660a",
  measurementId: "G-21MWW1J7PB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const storage = getStorage(app);

// Example usage of the collection method
//const myCollectionRef = collection(db, 'myCollectionName');

export default db;
