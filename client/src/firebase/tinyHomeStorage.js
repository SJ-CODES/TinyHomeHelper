import firebase from 'firebase/app'
import 'firebase/storage'
require("dotenv").config();


const firebaseApp = firebase.initializeApp(process.env.FIREBASE_CONFIG);

const storage= firebase.storage(firebaseApp);


export { storage, firebase as default };