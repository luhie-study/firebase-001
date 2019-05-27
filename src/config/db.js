import Firebase from 'firebase'
 const config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  }
const app = Firebase.initializeApp(config)
export const db = app.database()
