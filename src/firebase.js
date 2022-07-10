

import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
   //add config from firebase
  };
  
  // Initialize Firebase
 const app = initializeApp(firebaseConfig);

  const auth = getAuth()
  const provider = new GoogleAuthProvider();



  export {auth,provider}