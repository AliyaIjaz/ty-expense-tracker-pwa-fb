

import firebase from 'firebase/compat/app';
// import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from 'firebase/messaging';

const firebaseConfig = {
    apiKey: "AIzaSyC2ZAzYL7l28PodIEHpJqCahwsAD3qwUZE",
    authDomain: "ty-expense-tracker-pwa.firebaseapp.com",
    projectId: "ty-expense-tracker-pwa",
    storageBucket: "ty-expense-tracker-pwa.appspot.com",
    messagingSenderId: "418999918335",
    appId: "1:418999918335:web:0a14d8f8eaf400ff76b6ca"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export function configMsg() {
    console.log('Requesting permission....');
    Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
            console.log('Permission is granted...');
            getToken(messaging, { vapidKey: 'BN1_kTJ7Ssy2x08C-CseF3SqxkVzigP2qb5LDADbRL-IFfeypFuxrJhPeTNwm9um5xp1b26LUPq_WJHpywq6_88' }).then((currentToken) => {
                if (currentToken) {
                    // Send the token to your server and update the UI if necessary
                    // ...
                    console.log('Token retrived is...',currentToken);
                } else {
                    // Show permission request UI
                    console.log('No registration token available. Request permission to generate one.');
                    // ...
                }
            }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
                // ...
            });
        }
    })
}









