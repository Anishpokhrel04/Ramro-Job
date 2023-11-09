// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPBeEm6czTY1JH_h2EPmnPzekxiZidx7M",
  authDomain: "online-web-portal.firebaseapp.com",
  projectId: "online-web-portal",
  storageBucket: "online-web-portal.appspot.com",
  messagingSenderId: "752157381915",
  appId: "1:752157381915:web:65fc36080d6aa524586fbe",
  measurementId: "G-BVFXN7G149",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export{db};
