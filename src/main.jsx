import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from "@chakra-ui/react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCA7IFlkxq6NR6eQoH9D4DxkUSLVRmdxKw",
  authDomain: "react-proyec.firebaseapp.com",
  projectId: "react-proyec",
  storageBucket: "react-proyec.appspot.com",
  messagingSenderId: "137850211886",
  appId: "1:137850211886:web:0d835954e0c6f77e8499bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(  
  <ChakraProvider>
      <App />
      </ChakraProvider>
  )
