import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const config = {
  apiKey: "AIzaSyAHIyk95f_PO8PKBVG31WRRHwUd26RLfBE",
  authDomain: "logistics-f7a8e.firebaseapp.com",
  projectId: "logistics-f7a8e",
  storageBucket: "logistics-f7a8e.appspot.com",
  messagingSenderId: "467189202945",
  appId: "1:467189202945:web:a49419551b2fa0c8748000",
  measurementId: "G-GJN6P5N1SP",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const db = firebase.database();
