import firebase from 'firebase';

var config = {
    databaseURL: 'https://wateringholes-6e315.firebaseio.com/',
    storageBucket: 'wateringholes-6e315'
}

let app = firebase.initializeApp(config);

export default app;