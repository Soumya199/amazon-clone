import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_b1Ckmq3b5-0_s1-1oYiMWUX6e196WoQ",
    authDomain: "clone-1373d.firebaseapp.com",
    projectId: "clone-1373d",
    storageBucket: "clone-1373d.appspot.com",
    messagingSenderId: "678911059930",
    appId: "1:678911059930:web:3c58af4600952b734c42e3",
    measurementId: "G-4TJQC1PHT7"
  };

  const firebaseApp=initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  export const createUser=createUserWithEmailAndPassword;
  export const AuthenticateUser=signInWithEmailAndPassword;
  export const db = getFirestore(firebaseApp);
  export default auth;