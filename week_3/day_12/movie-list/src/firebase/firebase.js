// copy other firebase file and configure
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVEmlGDfJRBt7Gzrase0PQ1Agn8E1528w",
  authDomain: "ix-2023-movies.firebaseapp.com",
  projectId: "ix-2023-movies",
  storageBucket: "ix-2023-movies.appspot.com",
  messagingSenderId: "300385302563",
  appId: "1:300385302563:web:c28f903015a69031c95996",
  measurementId: "G-3PGDC62QQQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

// also be sure to install firebase, express!