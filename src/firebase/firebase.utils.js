

import firebase from "firebase/app";
import "firebase/auth";


const devConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
}

const prodConfig = {};

const config = process.env.NODE_ENV === "development" ? devConfig : prodConfig;

class Firebase {
    constructor(){
        firebase.initializeApp(config);
        this.firebaseAuth = firebase.auth();
    }

        //register
        register(email, password) {
            this.firebaseAuth.createUserWithEmailAndPassword(email, password)
        }

        //sign in with gogle
        useGoogleProvider() {
            const googleProvider = new firebase.auth.GoogleAuthProvider();
            googleProvider.setCustomParameters({ prompt : "select_account"});
            this.firebaseAuth.signInWithPopup(googleProvider);
        }
        
        
        //login


        //logout


        //fotgot password



}
export default new Firebase()