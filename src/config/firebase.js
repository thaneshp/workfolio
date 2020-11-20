import firebase from 'firebase';
import 'firebase/storage';  

const config = {
    apiKey: "AIzaSyBc9rS4_w5wy3cXSNp85TvCf7av_bj112A",
    authDomain: "workfolio-6d43e.firebaseapp.com",
    databaseURL: "https://workfolio-6d43e.firebaseio.com",
    projectId: "workfolio-6d43e",
    storageBucket: "workfolio-6d43e.appspot.com",
    messagingSenderId: "1019100387832",
    appId: "1:1019100387832:web:aeb5aa4baf6ea07e1a1e0d"
};

const app = firebase.initializeApp(config);
export default app;