// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxoGkIEfWJk_7VyVaTZ8qOryq3skXWbug",
    authDomain: "hynda-motors-25ea3.firebaseapp.com",
    projectId: "hynda-motors-25ea3",
    storageBucket: "hynda-motors-25ea3.appspot.com",
    messagingSenderId: "963133366864",
    appId: "1:963133366864:web:cb61b9e7fe15474e056755"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



export default auth;