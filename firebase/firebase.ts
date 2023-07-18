// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvWoqh7VajwB5RI_HQp_Pcmm9Mwv-0ZCg",
  authDomain: "ecommerce-4b5bf.firebaseapp.com",
  projectId: "ecommerce-4b5bf",
  storageBucket: "ecommerce-4b5bf.appspot.com",
  messagingSenderId: "114346558579",
  appId: "1:114346558579:web:58208e61e2bc1a0730d606",
  measurementId: "G-VRVH9Q3W4N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
// const analytics = getAnalytics(app);


export default app;
export {fireDB}
