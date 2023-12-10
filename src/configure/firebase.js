// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from'./firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAQmmZdNFxYRmIIy-wJaXBh-i-YYjlZ7RA",
  authDomain: "fb-store-b35a3.firebaseapp.com",
  projectId: "fb-store-b35a3",
  storageBucket: "fb-store-b35a3.appspot.com",
  messagingSenderId: "458209244899",
  appId: "1:458209244899:web:95d8de4690b48a23cd37d6"
};


const app = initializeApp(firebaseConfig);
export  const db=getDatabase(app)