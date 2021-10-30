import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAk9puTPcyocbd4uxcdhGD-LzafOxGfiVE",
    authDomain: "whatsapp-clone-e0991.firebaseapp.com",
    projectId: "whatsapp-clone-e0991",
    storageBucket: "whatsapp-clone-e0991.appspot.com",
    messagingSenderId: "154621568536",
    appId: "1:154621568536:web:d3370c286df2c37ac8456d",
    measurementId: "G-RLG2E0T6Q7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth ,provider};
  export default db;
