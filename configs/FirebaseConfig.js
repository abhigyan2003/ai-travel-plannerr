// Import Firebase core and Auth
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase web app config
const firebaseConfig = {
  apiKey: "AIzaSyABIQSvN3lQSuP0Qe3ch2iJ5TBZtGpi_iI",
  authDomain: "first-project-dd8b5.firebaseapp.com",
  projectId: "first-project-dd8b5",
  storageBucket: "first-project-dd8b5.appspot.com",
  messagingSenderId: "869794247928",
  appId: "1:869794247928:web:3d7086eca0d60dee0cf70d",
  measurementId: "G-4KWHF2BK6W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


