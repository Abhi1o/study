// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtL2GWgTu0OztairPS3XCLDxX8E8BN56Y",
  authDomain: "divisor-297a4.firebaseapp.com",
  projectId: "divisor-297a4",
  storageBucket: "divisor-297a4.appspot.com",
  messagingSenderId: "6185162251",
  appId: "1:6185162251:web:2fdccef2427cce3568d90e",
  measurementId: "G-P6RBZE0D2E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth();
export default app;