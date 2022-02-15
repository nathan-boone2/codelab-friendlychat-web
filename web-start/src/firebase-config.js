/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
 const config = {
  apiKey: "AIzaSyABa8wDKQB4VAEnhw8uO1dn8sjsQoqQf2Y",
  authDomain: "friendlychat-7765b.firebaseapp.com",
  projectId: "friendlychat-7765b",
  storageBucket: "friendlychat-7765b.appspot.com",
  messagingSenderId: "902460923673",
  appId: "1:902460923673:web:4b6edd6c33625785f42f88"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}