import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: "myday-330d5.firebaseapp.com",
  projectId: "myday-330d5",
  storageBucket: "myday-330d5.appspot.com",
  messagingSenderId: "933742746989",
  appId: "1:933742746989:web:c2c32a4f131e951e6f0e64",
  measurementId: "G-6ZR1MD9EGL"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);