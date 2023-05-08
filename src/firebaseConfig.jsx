import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBnlx258PitzMTAZEuCXhR4W30SbMVWb_U",
  authDomain: "clone-474c6.firebaseapp.com",
  projectId: "clone-474c6",
  storageBucket: "clone-474c6.appspot.com",
  messagingSenderId: "95848639988",
  appId: "1:95848639988:web:27dd4bfc6153ef64f45da1",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export{db,auth}