import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyBAiZ0DDcSlxpni5uP5SxPtxA1p1GvPADc",
  authDomain: "netflix-clone-9a20a.firebaseapp.com",
  projectId: "netflix-clone-9a20a",
  storageBucket: "netflix-clone-9a20a.appspot.com",
  messagingSenderId: "869145690081",
  appId: "1:869145690081:web:a4da8e693dc15641e95ca0"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
