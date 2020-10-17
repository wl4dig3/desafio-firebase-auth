import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBNmlJ3Ic0l2xkqP0gwLdjnl57btOqLyFY",
    authDomain: "atentica-desafio.firebaseapp.com",
    databaseURL: "https://atentica-desafio.firebaseio.com",
    projectId: "atentica-desafio",
    storageBucket: "atentica-desafio.appspot.com",
    messagingSenderId: "415571816563",
    appId: "1:415571816563:web:865ec4697c455f875afa06"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore()
const auth = firebase.auth()

export {db, auth}