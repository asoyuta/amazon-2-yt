// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDgBBVpxaoM-wCUGHhD0RwpiOPjtmBGWIM',
  authDomain: 'yt-88dd6.firebaseapp.com',
  projectId: 'yt-88dd6',
  storageBucket: 'yt-88dd6.appspot.com',
  messagingSenderId: '515317615205',
  appId: '1:515317615205:web:8ea4199be0e33e96b2948c',
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export { app, db, storage }
