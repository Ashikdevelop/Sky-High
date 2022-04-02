import {initializeApp} from "firebase/app"
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyBXE-_yPlJfDZy6QVXmO-DmY5yoNim_nmU",
    authDomain: "skyhigh-bc500.firebaseapp.com",
    projectId: "skyhigh-bc500",
    storageBucket: "skyhigh-bc500.appspot.com",
    messagingSenderId: "690692145376",
    appId: "1:690692145376:web:db13d59ca0e56e7460d085",
    measurementId: "G-J8HWQKGL1K"
  };


  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);