// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBF_RI_Jre76YvJ-ySD2XWRXQzGtt8aSPw",
    authDomain: "sunshine-844fe.firebaseapp.com",
    projectId: "sunshine-844fe",
    storageBucket: "sunshine-844fe.appspot.com",
    messagingSenderId: "491211153315",
    appId: "1:491211153315:web:32afae7e40cda4f231c416"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;