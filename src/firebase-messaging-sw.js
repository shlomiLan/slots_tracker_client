importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

const config = {
  messagingSenderId: '424581987334',
};

firebase.initializeApp(config);

let messaging = firebase.messaging();