

import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCq538ng-nku5KRnXWIqHulqXP2hMEo90",
  authDomain: "masai-lms-a7f56.firebaseapp.com",
  projectId: "masai-lms-a7f56",
  storageBucket: "masai-lms-a7f56.appspot.com",
  messagingSenderId: "1011624433295",
  appId: "1:1011624433295:web:ee87598c5c5b4f536642fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
