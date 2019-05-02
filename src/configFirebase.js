import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyAIBTEeDjBqsnu56eyTZUaXbX6PoNnTmL0',
  authDomain: 'slots-tracker-new.firebaseapp.com',
  databaseURL: 'https://slots-tracker-new.firebaseio.com',
  projectId: 'slots-tracker-new',
  storageBucket: 'slots-tracker-new.appspot.com',
  messagingSenderId: '424581987334',
};

firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

db.enablePersistence({ experimentalTabSynchronization: true });

const storage = firebase.storage();

const messaging = firebase.messaging();

export default {
  db,
  storage,
  messaging,
};
