import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config={
    apiKey:import.meta.env.VITE_apiKey,
    authDomain:import.meta.env.VITE_authDomain,
    projectId:import.meta.env.VITE_projectId,
    storageBucket:import.meta.env.VITE_storageBucket,
     messagingSenderId:import.meta.env.VITE_messagingSenderId,
     appId:import.meta.env.VITE_appId,
    measurementId:import.meta.VITE_measurementId,
}
// console.log(config);

const firebaseConfig = {
    apiKey: config.apiKey,
    authDomain: config.authDomain,
    projectId: config.projectId,
    storageBucket: config.storageBucket,
    messagingSenderId: config.messagingSenderId,
    appId: config.appId,
    measurementId: config.measurementId
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
