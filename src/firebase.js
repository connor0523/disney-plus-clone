import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
import { GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBOrVLc59159Ju6Oo_L01NwTy0knmxILiA",
  authDomain: "disney-plus-clone-386ba.firebaseapp.com",
  projectId: "disney-plus-clone-386ba",
  storageBucket: "disney-plus-clone-386ba.appspot.com",
  messagingSenderId: "660988806036",
  appId: "1:660988806036:web:753bac72767a82497d8581",
  measurementId: "G-TRJGG9M6FL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
const storage = getStorage()

export { auth, provider, storage }



