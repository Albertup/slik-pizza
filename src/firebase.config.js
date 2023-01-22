import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBJ5NBmOjzVI7NBPSYPgMKaQRfALSNQgWQ",
    authDomain: "slick-pizza.firebaseapp.com",
    databaseURL: "https://slick-pizza-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "slick-pizza",
    storageBucket: "slick-pizza.appspot.com",
    messagingSenderId: "562648940113",
    appId: "1:562648940113:web:6465000661d4d22b628270",
    measurementId: "G-B6RRR2ZRZW"
  };

  const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  const firestore = getFirestore(app);
  const storage = getStorage(app);
  const analytics = getAnalytics(app);

  export { app, firestore, storage, analytics }