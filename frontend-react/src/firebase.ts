// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBAIAYvrObYeJB9ONYzGZe4-rm5NTN14sY",
    authDomain: "to-do-app-f4fa0.firebaseapp.com",
    projectId: "to-do-app-f4fa0",
    storageBucket: "to-do-app-f4fa0.appspot.com",
    messagingSenderId: "739841113734",
    appId: "1:739841113734:web:3c0164beaf79476bef1b07"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {app, auth};