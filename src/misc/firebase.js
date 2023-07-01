import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: 'AIzaSyDmLTIq8XCuarHmAjlZ8uXag6-eS8ifafw',
  authDomain: 'chat-box-17.firebaseapp.com',
  databaseURL: 'https://chat-box-17-default-rtdb.firebaseio.com',
  projectId: 'chat-box-17',
  storageBucket: 'chat-box-17.appspot.com',
  messagingSenderId: '947825956584',
  appId: '1:947825956584:web:568781f0f5bc8faf99db5d',
};

const app = firebase.initializeApp(config);
export const auth = app.auth();
export const database = app.database();
