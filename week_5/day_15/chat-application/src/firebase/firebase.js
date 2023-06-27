// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3rGHOndI8dOgbM6rm-aI1Y3J4qpJ1QrE",
  authDomain: "ix-2023-library.firebaseapp.com",
  projectId: "ix-2023-library",
  storageBucket: "ix-2023-library.appspot.com",
  messagingSenderId: "605638290960",
  appId: "1:605638290960:web:5c04d9bc88acfb1c46e495",
  measurementId: "G-W21L3D36XH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };