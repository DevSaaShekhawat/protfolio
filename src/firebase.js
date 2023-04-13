
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDiUnQSisdl0SshHkPXBq9zS3PmnJ8Vlvs",
  authDomain: "react-portfolio-devendra.firebaseapp.com",
  projectId: "react-portfolio-devendra",
  storageBucket: "react-portfolio-devendra.appspot.com",
  messagingSenderId: "960773163445",
  appId: "1:960773163445:web:99339a691a2fbdb32e71fc"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore();