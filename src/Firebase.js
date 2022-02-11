// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATyh8r8sn-l-KMiRFhddh9dksP-C0A6nA",
  authDomain: "hackaton-team.firebaseapp.com",
  projectId: "hackaton-team",
  storageBucket: "hackaton-team.appspot.com",
  messagingSenderId: "905973485000",
  appId: "1:905973485000:web:61b960324ca0671f6704fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)