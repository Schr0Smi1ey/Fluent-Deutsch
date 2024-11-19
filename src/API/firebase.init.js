// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCz6i_GAyY2WQuVl45cuZxlhnh2ecV9eIw",
  authDomain: "fluent-deutsch.firebaseapp.com",
  projectId: "fluent-deutsch",
  storageBucket: "fluent-deutsch.firebasestorage.app",
  messagingSenderId: "853805695326",
  appId: "1:853805695326:web:fe30726d8cb3afac02cfcf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
