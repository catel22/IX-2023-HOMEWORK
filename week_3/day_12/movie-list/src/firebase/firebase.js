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
  apiKey: "AIzaSyAUQHK4sGX-ACxHqGLLg0NR8XKuiZOKjTo",
  authDomain: "movie-project-b83a8.firebaseapp.com",
  projectId: "movie-project-b83a8",
  storageBucket: "movie-project-b83a8.appspot.com",
  messagingSenderId: "247282496636",
  appId: "1:247282496636:web:5d6e92e45bce7a093185f9",
  measurementId: "G-NMMLX36J8L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

// also be sure to install firebase, express!