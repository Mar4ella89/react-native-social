// import * as firebase from "firebase";
// import "firebase/auth";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQxlmxEaXlLkENYczBEPC2iP2EaSHEaGU",
  authDomain: "rn-social-3d30a.firebaseapp.com",
  projectId: "rn-social-3d30a",
  storageBucket: "rn-social-3d30a.appspot.com",
  messagingSenderId: "257232826593",
  appId: "1:257232826593:web:91968cebb7febb707507a0",
  measurementId: "G-7YYPE67G2T",
};

const app = initializeApp(firebaseConfig);
export default app;

export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
// export default firebase.initializeApp(firebaseConfig);
