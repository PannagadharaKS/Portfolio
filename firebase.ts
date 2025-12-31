import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyCtJxfaiDhdiKGMZZAIadvcci2SNHd5aPw",
    authDomain: "portfolio-84fe5.firebaseapp.com",
    projectId: "portfolio-84fe5",
    storageBucket: "portfolio-84fe5.firebasestorage.app",
    messagingSenderId: "359248615060",
    appId: "1:359248615060:web:0500ac092e0791083a8681"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};