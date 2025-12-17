import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCC67kaaQSTF6RKZkyd8bfJiVLWYCaUy1Y",

    authDomain: "mytrip-f654b.firebaseapp.com",

    databaseURL: "https://mytrip-f654b-default-rtdb.firebaseio.com",

    projectId: "mytrip-f654b",

    storageBucket: "mytrip-f654b.firebasestorage.app",

    messagingSenderId: "304458362767",

    appId: "1:304458362767:web:a5701456ce512aa4e1e5fa",

    measurementId: "G-KXH1EMN5X5",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

