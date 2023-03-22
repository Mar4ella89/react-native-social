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

  // apiKey: "AIzaSyDQxlmxEaXlLkENYczBEPC2iP2EaSHEaGU",
  // authDomain: "rn-social-3d30a.firebaseapp.com",
  // projectId: "rn-social-3d30a",
  // storageBucket: "rn-social-3d30a.appspot.com",
  // messagingSenderId: "257232826593",
  // appId: "1:257232826593:web:91968cebb7febb707507a0",
  // measurementId: "G-7YYPE67G2T",
};

const app = initializeApp(firebaseConfig);
export default app;

export const auth = getAuth(app);

export const db = getFirestore(app);
export const storage = getStorage(app);

// import * as firebase from "firebase";
// import "firebase/auth";
// import "firebase/storage";
// import "firebase/firestore";

// var firebaseConfig = {
//   // apiKey: "AIzaSyDFauNPYaTGMGWKEvyHdTh8m_kfhKDiQuU",
//   // authDomain: "rn-social-391ec.firebaseapp.com",
//   // databaseURL: "https://rn-social-391ec.firebaseio.com",
//   // projectId: "rn-social-391ec",
//   // storageBucket: "rn-social-391ec.appspot.com",
//   // messagingSenderId: "974670373504",
//   // appId: "1:974670373504:web:fe01e1286f5ad11ff0fc65",
//   apiKey: "AIzaSyANRWM_qWTYQFFwC8qUWnq2Cw8c7xKz4ng",
//   authDomain: "goit-react-native-hw-01.firebaseapp.com",
//   projectId: "goit-react-native-hw-01",
//   storageBucket: "goit-react-native-hw-01.appspot.com",
//   messagingSenderId: "1063491383043",
//   appId: "1:1063491383043:web:49252706589bc80696c336",
// };
// // Initialize Firebase
// export default firebase.initializeApp(firebaseConfig);
