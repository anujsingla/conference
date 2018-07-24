// 1. create new project from the firebase
// follow these steps 2. https://firebase.google.com/docs/web/setup?authuser=1#add_firebase_to_your_app

import firebase from 'firebase';
try {
    var config = {
        apiKey: "AIzaSyCYdxk_JHuTZWGFN9ubJRPJPtyDrAEqM3M",
        authDomain: "todo-app-21fa1.firebaseapp.com",
        databaseURL: "https://todo-app-21fa1.firebaseio.com",
        projectId: "todo-app-21fa1",
        storageBucket: "todo-app-21fa1.appspot.com",
        messagingSenderId: "84691222181"
      };
      firebase.initializeApp(config);
} catch (e) {
    console.log('firebase is not connected' + e);
}

export const firebaseRef = firebase.database().ref();
export default firebase;

// firebaseRef.set({
//     appName: 'Todo App',
//     isRunning: true,
//     user: {
//         name: 'anuj',
//         age: 27
//     }
// });

// set always wipe the value from the database so we will use child.
// firebaseRef.set({
//     appName: 'Todo App 2',
// });

// it will wipe all child reference like user and set value
// firebaseRef.child('user').set({
//     name: 'hello'
// });

// updating value

// it is updating first level of properties like
// app= {
//     name: 'app',
//     version: '7'
// }
// if you update name in the app object it will wipe version properties.
// update is used for updating first level properties

// firebaseRef.update({
//     isRunning: false
// });

// firebaseRef.child('user').update({
//     name: 'updating value'

// });

// remove data

// it will remove all database
// firebaseRef.remove();

// firebaseRef.child('user/name').remove();

// getting data

// it will fetch all data from the reference
// firebaseRef.once('value').then((data) => console.log(data.val()));

// firebase listener for value update
// firebaseRef.on('value', (data) => console.log(data.val()));

// firebaseRef.off();

// firebase working with array

// firebase store value in the json format and key value pair and array also stores in
// the key/value pair .

// if child is not present it will add child like todos
// let todosRef = firebaseRef.child('todos');
// todosRef.push({
//     name: 'todo1'
// });

// // event listener
// // child_added child_changes child_removed

// todosRef.on('child_added', (snapshot) => console.log(snapshot.val()));

// todosRef.push({
//     name: 'todo2'
// });