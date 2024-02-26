import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBFguHCholuiQvbPd2ECzRgoYAmruv3qRk",
  authDomain: "sherlockbookstore-d7692.firebaseapp.com",
  projectId: "sherlockbookstore-d7692",
  storageBucket: "sherlockbookstore-d7692.appspot.com",
  messagingSenderId: "24428210196",
  appId: "1:24428210196:web:45ee8fb99e27622328df01"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);