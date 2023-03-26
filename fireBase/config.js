import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANRWM_qWTYQFFwC8qUWnq2Cw8c7xKz4ng",
  authDomain: "goit-react-native-hw-01.firebaseapp.com",
  projectId: "goit-react-native-hw-01",
  storageBucket: "goit-react-native-hw-01.appspot.com",
  messagingSenderId: "1063491383043",
  appId: "1:1063491383043:web:49252706589bc80696c336",
};

const app = initializeApp(firebaseConfig);
export default app;

export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);
