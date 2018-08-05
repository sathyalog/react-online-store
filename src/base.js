import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBckDUw2L6bXJTu1XX2rMI7BO6ZY2da-tA",
    authDomain: "react-online-store.firebaseapp.com",
    databaseURL: "https://react-online-store.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database())

// this is a named export
export {firebaseApp};

//this is a default export
export default base;