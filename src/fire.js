import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
export { useCollectionData } from "react-firebase-hooks/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHIyk95f_PO8PKBVG31WRRHwUd26RLfBE",
  authDomain: "logistics-f7a8e.firebaseapp.com",
  projectId: "logistics-f7a8e",
  storageBucket: "logistics-f7a8e.appspot.com",
  messagingSenderId: "467189202945",
  appId: "1:467189202945:web:a49419551b2fa0c8748000",
  measurementId: "G-GJN6P5N1SP",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
