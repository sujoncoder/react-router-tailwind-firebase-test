// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-h12tC4DI36MhwTtoWMiL_PFqsIz7CIo",
  authDomain: "react-router-tailwind-firebase.firebaseapp.com",
  projectId: "react-router-tailwind-firebase",
  storageBucket: "react-router-tailwind-firebase.appspot.com",
  messagingSenderId: "574602168280",
  appId: "1:574602168280:web:0fca185aeddd722f7fd4ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;