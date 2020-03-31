import firebase from 'firebase/app';
import 'firebase/auth';

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCXbRXjQzX9QZeNyNEGY7V1FcHVh6FotUI",
    authDomain: "react-redux-login-18458.firebaseapp.com",
    databaseURL: "https://react-redux-login-18458.firebaseio.com",
    projectId: "react-redux-login-18458",
    storageBucket: "react-redux-login-18458.appspot.com",
    messagingSenderId: "565474645913",
    appId: "1:565474645913:web:0526154d067b07befb6508"
}
firebase.initializeApp(firebaseConfig)

export default firebase;
