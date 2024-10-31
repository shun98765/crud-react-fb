// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBgBaP4u1UNCmf6tdMR4UaZXxZLjAQDZM0",
  authDomain: "empw-clase13web.firebaseapp.com",
  projectId: "empw-clase13web",
  storageBucket: "empw-clase13web.appspot.com",
  messagingSenderId: "831374185656",
  appId: "1:831374185656:web:4dc91c8f66868df921504d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};