// importScripts('https://www.gstatic.com/firebasejs/5.5.6/firebase-app.js');
// importScripts('https://www.gstatic.com/firebasejs/5.5.6/firebase-messaging.js');
//
//
// const config = {
//   apiKey: 'AIzaSyAIBTEeDjBqsnu56eyTZUaXbX6PoNnTmL0',
//   authDomain: 'slots-tracker-new.firebaseapp.com',
//   databaseURL: 'https://slots-tracker-new.firebaseio.com',
//   projectId: 'slots-tracker-new',
//   storageBucket: 'slots-tracker-new.appspot.com',
//   messagingSenderId: '424581987334',
//   appId: '1:424581987334:web:1e8f3c4166248069',
// };
//
// firebase.initializeApp(config);
//
// const messaging = firebase.messaging();
//
//
// messaging.setBackgroundMessageHandler((payload) => {
//   console.log('[firebase-messaging-sw.js] Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Background Message Title';
//   const notificationOptions = {
//     body: 'Background Message body.',
//     icon: '/firebase-logo.png',
//   };
//
//   return self.registration.showNotification(notificationTitle, notificationOptions);
// });


importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

const config = {
  messagingSenderId: '424581987334',
};

firebase.initializeApp(config);

let messaging = firebase.messaging();
