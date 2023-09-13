
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAP6IYzyU4jIsjvNO9wGU-hNewj9hpE8pU",
  authDomain: "arbell-ecommerce.firebaseapp.com",
  projectId: "arbell-ecommerce",
  storageBucket: "arbell-ecommerce.appspot.com",
  messagingSenderId: "1032836202124",
  appId: "1:1032836202124:web:a2a4355bd05397f34bc5a9"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)

