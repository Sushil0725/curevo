// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh63Lp_LP9MaOSmoKUkXzMdkU228z2IeQ",
  authDomain: "curevo-ba3bc.firebaseapp.com",
  projectId: "curevo-ba3bc",
  storageBucket: "curevo-ba3bc.firebasestorage.app",
  messagingSenderId: "817126194892",
  appId: "1:817126194892:web:a60a805cfd28871d5d0c69",
  measurementId: "G-CHNK2SFZ56"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);