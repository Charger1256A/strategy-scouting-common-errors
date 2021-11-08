import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDomd4SIK_u9Dqn-I1jMGdlGLzpHebMyJs",
    authDomain: "strategy-scouting-common-6d737.firebaseapp.com",
    databaseURL: "https://strategy-scouting-common-6d737-default-rtdb.firebaseio.com",
    projectId: "strategy-scouting-common-6d737",
    storageBucket: "strategy-scouting-common-6d737.appspot.com",
    messagingSenderId: "954946348203",
    appId: "1:954946348203:web:a87fdf6be3e594f1af03ee",
    measurementId: "G-2VRECDDVNR"
  };

firebase.initializeApp(firebaseConfig);
export const db = firebase.database();