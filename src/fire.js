import firebase from 'firebase'
var config = {
    apiKey: "AIzaSyBU4ef-ZLFpOCvjKfbSet6QX0neSKGOMRs",
    authDomain: "mydb-de288.firebaseapp.com",
    databaseURL: "https://mydb-de288.firebaseio.com",
    projectId: "mydb-de288",
    storageBucket: "mydb-de288.appspot.com",
    messagingSenderId: "26716510758"
  };
  var fire = firebase.initializeApp(config);
export default fire;