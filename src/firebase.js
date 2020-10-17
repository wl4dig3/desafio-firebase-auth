import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDmLEpV8JvRs90TDwXkqcZuBE0L56HiouQ",
    authDomain: "clase05-10.firebaseapp.com",
    databaseURL: "https://clase05-10.firebaseio.com",
    projectId: "clase05-10",
    storageBucket: "clase05-10.appspot.com",
    messagingSenderId: "896690830399",
    appId: "1:896690830399:web:d16b052ed3db66656acc8a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth()

export {db, auth}