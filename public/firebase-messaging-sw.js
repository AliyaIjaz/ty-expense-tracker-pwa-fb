importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.2.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyC2ZAzYL7l28PodIEHpJqCahwsAD3qwUZE",
    authDomain: "ty-expense-tracker-pwa.firebaseapp.com",
    projectId: "ty-expense-tracker-pwa",
    storageBucket: "ty-expense-tracker-pwa.appspot.com",
    messagingSenderId: "418999918335",
    appId: "1:418999918335:web:0a14d8f8eaf400ff76b6ca"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();