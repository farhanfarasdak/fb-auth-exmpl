import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "fir-example-8ef3b.firebaseapp.com",
  projectId: "fir-example-8ef3b",
  storageBucket: "fir-example-8ef3b.appspot.com",
  messagingSenderId: "1035136076750",
  appId: "1:1035136076750:web:0191a05f523a87b4a8f99f"
};

const app = initializeApp(firebaseConfig);
const authFirebase = getAuth(app);

export default authFirebase