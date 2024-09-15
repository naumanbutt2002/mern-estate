import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-4afee.firebaseapp.com",
  projectId: "mern-estate-4afee",
  storageBucket: "mern-estate-4afee.appspot.com",
  messagingSenderId: "1064914575830",
  appId: "1:1064914575830:web:8294c77a6e22127673c477"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
