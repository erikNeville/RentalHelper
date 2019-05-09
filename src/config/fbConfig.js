import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyC7n8YdB8pZ0o3-TpcxFggWjwBgSNg4-6I",
    authDomain: "rentalhelper-3ef6e.firebaseapp.com",
    databaseURL: "https://rentalhelper-3ef6e.firebaseio.com",
    projectId: "rentalhelper-3ef6e",
    storageBucket: "rentalhelper-3ef6e.appspot.com",
    messagingSenderId: "528329233309",
    appId: "1:528329233309:web:a065b3fcab6e8481"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;