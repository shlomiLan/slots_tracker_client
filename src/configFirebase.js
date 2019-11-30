import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/messaging';
import 'firebase/storage';

const config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: 'slots-tracker-new.firebaseapp.com',
  databaseURL: 'https://slots-tracker-new.firebaseio.com',
  projectId: 'slots-tracker-new',
  storageBucket: 'slots-tracker-new.appspot.com',
  messagingSenderId: '424581987334',
  appId: '1:424581987334:web:1e8f3c4166248069',
};

firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
const db = firebase.firestore();

db.enablePersistence({ synchronizeTabs: true });

const storage = firebase.storage();

const messaging = firebase.messaging();
messaging.usePublicVapidKey('BK4Odj0TLAUBNc7g3h9EZCpjexigiUdygZLAt5Drswe-cT8HwdEY_Sz5ICOsOzdwB3uQiicDbaU2h2yBz14js2M');

export default {
  db,
  storage,
  messaging,
};
