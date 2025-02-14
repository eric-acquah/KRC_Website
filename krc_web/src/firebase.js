// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-kBaqCMEpR4v_azUnv0YI_xW_cpWZy7c",
  authDomain: "krc-web-1212c.firebaseapp.com",
  projectId: "krc-web-1212c",
  storageBucket: "krc-web-1212c.firebasestorage.app",
  messagingSenderId: "738465005546",
  appId: "1:738465005546:web:851277155b045a82ec3c93",
  measurementId: "G-0K5LEN9B0J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);