import firebase from 'firebase/app'
import 'firebase/storage'
require("dotenv").config();


firebase.initializeApp(process.env.FIREBASE_CONFIG);

const storage = firebase.storage();

export { storage, firebase as default };