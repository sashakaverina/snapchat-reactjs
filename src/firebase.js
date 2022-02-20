import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
import {GoogleAuthProvider} from "firebase/auth"
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyCZWShFp723SpiT8brH3nO1mVn-zexR7oE",
    authDomain: "snapchat-react-ec320.firebaseapp.com",
    projectId: "snapchat-react-ec320",
    storageBucket: "snapchat-react-ec320.appspot.com",
    messagingSenderId: "94095756020",
    appId: "1:94095756020:web:933a53102005e015696ca1"
  };
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);
  const storage = getStorage();
  const provider = new GoogleAuthProvider();

  export { db, auth, storage, provider };