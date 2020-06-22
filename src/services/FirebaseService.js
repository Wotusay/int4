import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB4Y0upUO6rRU-qw7TM8xI4568Kyz5Ay64",
  authDomain: "honeyhome-5582a.firebaseapp.com",
  databaseURL: "https://honeyhome-5582a.firebaseio.com",
  projectId: "honeyhome-5582a",
  storageBucket: "honeyhome-5582a.appspot.com",
  messagingSenderId: "690883446050",
  appId: "1:690883446050:web:58fac74a1fc133263d517b",
};

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
