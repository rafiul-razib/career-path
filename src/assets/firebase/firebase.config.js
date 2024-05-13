// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvMmSxV9gtVjs-1aBhQPj_8nYXC27TBCo",
  authDomain: "career-path-3991e.firebaseapp.com",
  projectId: "career-path-3991e",
  storageBucket: "career-path-3991e.appspot.com",
  messagingSenderId: "233647621180",
  appId: "1:233647621180:web:20e09c3b7e86332e442f39"

//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);