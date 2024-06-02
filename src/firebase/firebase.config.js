// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyADNloN3MTq_EA9BcaRVOvGWX8sb-2TC-o",
  // authDomain: "assignment-12-80ff0.firebaseapp.com",
  // projectId: "assignment-12-80ff0",
  // storageBucket: "assignment-12-80ff0.appspot.com",
  // messagingSenderId: "354973393685",
  // appId: "1:354973393685:web:df12023b631c1c67c5bf1c"
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
