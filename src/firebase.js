import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCZWShFp723SpiT8brH3nO1mVn-zexR7oE",
    authDomain: "snapchat-react-ec320.firebaseapp.com",
    projectId: "snapchat-react-ec320",
    storageBucket: "snapchat-react-ec320.appspot.com",
    messagingSenderId: "94095756020",
    appId: "1:94095756020:web:933a53102005e015696ca1"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, storage, provider };