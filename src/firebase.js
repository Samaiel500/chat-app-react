import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCB2xjmy2-pZZo3-4YKCAi_IG56nPMOYBk",
  authDomain: "chat-98cfb.firebaseapp.com",
  projectId: "chat-98cfb",
  storageBucket: "chat-98cfb.appspot.com",
  messagingSenderId: "1071435785065",
  appId: "1:1071435785065:web:140b49dd772fd6b84e13f8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();