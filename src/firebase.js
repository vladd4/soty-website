// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA6H2s4Qkz97b-HSrgUS0HwRU7nHjanJ24",
  authDomain: "soty-website.firebaseapp.com",
  projectId: "soty-website",
  storageBucket: "soty-website.appspot.com",
  messagingSenderId: "338778864155",
  appId: "1:338778864155:web:9bcf176cd59aafcb2e16be",
  measurementId: "G-SMFGN9V7Q8",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
