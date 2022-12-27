// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBETIUgN1XTeeVYJvbBWMkcOIoRDvMrAFI",
  authDomain: "easy-task-manager.firebaseapp.com",
  projectId: "easy-task-manager",
  storageBucket: "easy-task-manager.appspot.com",
  messagingSenderId: "535644823562",
  appId: "1:535644823562:web:d9d0fac77e9c1c1a34fff3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;