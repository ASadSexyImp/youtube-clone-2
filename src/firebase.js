// import firebase from 'firebase/app'
import firebase from 'firebase/compat/app';

// import 'firebase/auth'
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBj1uL4XB-lPoU-5yJ2adJ1BVYkNZpVfvM",
    authDomain: "clone-fef73.firebaseapp.com",
    projectId: "clone-fef73",
    storageBucket: "clone-fef73.appspot.com",
    messagingSenderId: "762135827312",
    appId: "1:762135827312:web:bcd8b464f1d4e096deb5b5",
    measurementId: "G-WX3D7GMWPC"
};

firebase.initializeApp(firebaseConfig)

export default firebase.auth()