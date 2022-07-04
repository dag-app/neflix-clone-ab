// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCYfA2za2HjbG2oTpKjamMI703lkFBFNjk",
    authDomain: "neflix-clone-ab480.firebaseapp.com",
    projectId: "neflix-clone-ab480",
    storageBucket: "neflix-clone-ab480.appspot.com",
    messagingSenderId: "467309206681",
    appId: "1:467309206681:web:a03e5c94d7815277dbac08"
  };

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }