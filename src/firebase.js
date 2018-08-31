import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD_R_LVneCp1vp2qk6GzgkxltGZbL9h4iw",
  authDomain: "project5-201ae.firebaseapp.com",
  databaseURL: "https://project5-201ae.firebaseio.com",
  projectId: "project5-201ae",
  storageBucket: "project5-201ae.appspot.com",
  messagingSenderId: "99801581051"
};
firebase.initializeApp(config);

export default firebase;
