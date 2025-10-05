// src/firebase.js
const { initializeApp } =require( "firebase/app");//this function initializes my firebase app with the config i provided 
const { getFirestore }  =require("firebase/firestore");//initializes the firestore database which is NoSQL database 
//where i will store the data like bus routes stops and timings 
const firebaseConfig = { // obj containing keys when i creaed project 
  apiKey: "AIzaSyD29iVpWze8-Qoz3jIsLYkQ93mwXytlhPQ",
  authDomain: "bus-tracker-firebase.firebaseapp.com",
  projectId: "bus-tracker-firebase",
  storageBucket: "bus-tracker-firebase.firebasestorage.app",
  messagingSenderId: "42000493453",
  appId: "1:42000493453:web:28727587a0d1102bae6bc4"
};

const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 module.exports ={db}; 
