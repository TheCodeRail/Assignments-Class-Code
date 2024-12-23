// sync

// function one() {
//   console.log("one");
// }

// function two() {
//   console.log("two");
// }
// function third() {
//   console.log("third");
// }

// one();
// two();
// third();

// callback()

// function sum(a, b) {
//   return a + b;
// }

// function display(sum, a, b) {
//   console.log(sum(a, b));
// }

// display(sum, 5, 5);

/// aync js

// one();
// setTimeout(function () {
//   two();
// }, 3000);
// third();

// callback hell

// setTimeout(function () {
//   console.log("one");
//   setTimeout(function () {
//     console.log("two");
//     setTimeout(function () {
//       console.log("three");
//     }, 2000);
//   }, 2000);
// }, 2000);

// PROMISES return the resolve and reject
// we catch resolve using .then and reject using .catch

// const username=new Promise(function(resolve,reject)
// {
//     resolve("This is resolved")
// })

// username.then(function (data) {
//   console.log(data);
// });

// username.catch(function (data) {
//   console.log(data);
// });

//Problem in promises is promise chaining that is again a hotchpotch to look at
// Async await

// function resolveAfter2Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 2000);
//   });
// }
// function resolveAfter3Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved2");
//     }, 3000);
//   });
// }
// function resolveAfter4Seconds() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved3"); // promise will give the resolve part
//     }, 4000);
//   });
// }

// async function asyncCall() {
//   console.log("before result");
//   // await means ki wait for this perticular promise to return
//   const res1 = await resolveAfter2Seconds();
//   console.log(res1);
//   const res2 = resolveAfter3Seconds();
//   console.log(res2);
//   const res3 = resolveAfter4Seconds();

//   console.log(res3);

//   console.log("after result");
//   // Expected output: "resolved"
// }
// asyncCall();

async function getCatFact() {
  const response = await fetch("https://catfact.ninja/fact");
  const catfact = await response.json();
  console.log(catfact.length);
}

getCatFact();

// hoisting
// function getName() {
//   console.log("akshat");
// }

// var a = 20;
// console.log(a);

/// string

// closures

// let username = "jain";
// function getsomething() {
//   let username = "akshat";
//   function getName() {
//     console.log(username);
//   }
//   getName();
// }

// getsomething();
