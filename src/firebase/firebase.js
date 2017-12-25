import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCD5P0y1ZWLQzVmFhmteUzKgCSWDyag7s0",
  authDomain: "expensify-100ee.firebaseapp.com",
  databaseURL: "https://expensify-100ee.firebaseio.com",
  projectId: "expensify-100ee",
  storageBucket: "expensify-100ee.appspot.com",
  messagingSenderId: "1013098570714"
};

firebase.initializeApp(config);
const db = firebase.database();

export { firebase, db as default };

// db.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((item) => {
//       expenses.push({
//         id: item.key,
//         ...item.val()
//       });
//     });

//     console.log(expenses);
//   });

//   db.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((item) => {
//       expenses.push({
//         id: item.key,
//         ...item.val()
//       });
//     });

//     console.log(expenses);
//   });

// // child_removed
// db.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// db.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// db.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// db.ref().on('value', (snapshot) => {
//   const person = snapshot.val();
//   const gay = person.isGay ? 'gay ' : '';
//   console.log(`${person.name} is ${person.age} years old ${gay}and he lives in ${person.location.city}`);
// });

// db.ref().set({
//   name: 'Ivan Yakimov',
//   age: 26,
//   isGay: true,
//   location: {
//     country: 'Sirbistan',
//     city: 'Bor'
//   }
// }).then(() => {
//   console.log('Data saved');
// }).catch((e) => {
//   console.log('Failed.', e);
// });

// db.ref().update({
//   age: 27,
//   isGay : false,
//   'location/city': 'Belgrade'
// });

// db.ref('isGay')
//   .remove()
//   .then(() => {
//     console.log('Data removed');
//   }).catch((e) => {
//     console.log('Failed', e);
//   });