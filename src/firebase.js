// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getDatabase } from "firebase/database";
// import firebase from "firebase/compat/app";
// import "firebase/auth";

// const API_KEY = import.meta.env.VITE_API_KEY;
// const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
// const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
// const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET;
// const MESSAGING_SENDER_ID = import.meta.env.VITE_MESSAGING_SENDER_ID;
// const APP_ID = import.meta.env.VITE_APP_ID;

// // const firebaseConfig = {
// //     apiKey: API_KEY,
// //     authDomain: AUTH_DOMAIN,
// //     projectId: PROJECT_ID,
// //     storageBucket: STORAGE_BUCKET,
// //     messagingSenderId: MESSAGING_SENDER_ID,
// //     appId: APP_ID,
// // };

// const app = firebase.initializeApp({
//     apiKey: API_KEY,
//     authDomain: AUTH_DOMAIN,
//     projectId: PROJECT_ID,
//     storageBucket: STORAGE_BUCKET,
//     messagingSenderId: MESSAGING_SENDER_ID,
//     appId: APP_ID,
// });
// // export const auth = app.auth;
// export default app;
// // export default const  app = initializeApp(firebaseConfig);
// export const auth = getAuth();
// export const db = getDatabase();

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const API_KEY = import.meta.env.VITE_API_KEY;
const AUTH_DOMAIN = import.meta.env.VITE_AUTH_DOMAIN;
const PROJECT_ID = import.meta.env.VITE_PROJECT_ID;
const STORAGE_BUCKET = import.meta.env.VITE_STORAGE_BUCKET;
const MESSAGING_SENDER_ID = import.meta.env.VITE_MESSAGING_SENDER_ID;
const APP_ID = import.meta.env.VITE_APP_ID;

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase(app);

export { app, auth, db };
