import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAGEwE5Vdp4XWYHwCBHcfd1dMpQTq0OHBg",
  authDomain: "eventure-61c1e.firebaseapp.com",
  projectId: "eventure-61c1e",
  storageBucket: "eventure-61c1e.appspot.com",
  messagingSenderId: "572127415336",
  appId: "1:572127415336:web:f1c4b86809d168bda1391d",
  measurementId: "G-LEXPTNCJPG",
};

const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);
