import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: `${process.env.GATSBY_apiKey}`,
  authDomain: `${process.env.GATSBY_authDomain}`,
  projectId: `${process.env.GATSBY_projectId}`,
  storageBucket: `${process.env.GATSBY_storageBucket}`,
  messagingSenderId: `${process.env.GATSBY_messagingSenderId}`,
  appId: `${process.env.GATSBY_appId}`,
  measurementId: `${process.env.GATSBY_measurementId}`,
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { analytics, app, db };
