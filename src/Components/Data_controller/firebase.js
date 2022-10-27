import firebase from 'firebase/compat/app';
import "firebase/compat/database";
const firebaseApp = firebase.initializeApp(
    {
        apiKey: "AIzaSyCC3LRmvmFJ8V5wrfeMFGG2W2lTH5MRcCw",
        authDomain: "sae-demo-cbd0e.firebaseapp.com",
        databaseURL: "https://sae-demo-cbd0e-default-rtdb.firebaseio.com",
        projectId: "sae-demo-cbd0e",
        storageBucket: "sae-demo-cbd0e.appspot.com",
        messagingSenderId: "391415969236",
        appId: "1:391415969236:web:d98015f778455b161ad241"
    }
);
export const dataRef = firebase.database();
export default firebase;