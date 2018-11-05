import firebase from 'firebase';

var config = {
    apiKey: 'AIzaSyBda8s1N7Vmlq6coof0zrVB2HAX7EwGBjM',
    databaseURL: 'https://wateringholes-6e315.firebaseio.com/',
    storageBucket: 'wateringholes-6e315'
}

let app = firebase.initializeApp(config);

export default app;