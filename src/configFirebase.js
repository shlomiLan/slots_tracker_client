import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/storage';

const config = {
  apiKey: '####',
  authDomain: '####',
  databaseURL: '####',
  projectId: '####',
  storageBucket: '####',
  messagingSenderId: '####',
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
