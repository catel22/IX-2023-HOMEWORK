// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

export { db };

// also be sure to install firebase, express!