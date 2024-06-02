// // answer no 1

// console.log("I am javascript");

// // ans 2
// let username, admin;

// username = "john";
// admin = username;
// console.log(admin);

// ans 3
// let a;
// console.log(a);

// ans 4

// let a, b;
// a = 10;
// b = 20;
// console.log(a + b);

// ans 5
// let s = "my" + "name";
// console.log(s);
// console.log("6" / "2");
// ans 6

const number = 5;

// if (number > 0) {
//   console.log(1);
// } else if (number < 0) {
//   console.log(-1);
// } else {
//   console.log(0);
// }
// ans 7
// number > 0 ? console.log(1) : number < 0 ? console.log(-1) : console.log(0);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// ans 9

// for (let i = 0; i < 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// ans 11

// function greet(username) {
//   console.log("Hello " + username);
// }

// let username = "akshat";
// greet(username);

// function isEligible(age) {
//   if (age < 18) {
//     return "You are not eligible";
//   } else if (age >= 18) {
//     return "You are eligible";
//   } else {
//     console.log("Wrong Input");
//   }
// }

// let canvote = isEligible(17);
// console.log(canvote);

// let isEligible = function (age) {
//   if (age < 18) {
//     return "You are not eligible";
//   } else if (age >= 18) {
//     return "You are eligible";
//   } else {
//     console.log("Wrong Input");
//   }
// };
// console.log(isEligible(10));

// arrow functions
// const isEligible = (age) => {
//   if (age < 18) {
//     console.log("You are not elegible");
//   }
// };

// ans 14
// let user = {
//   name: "akshat",
//   age: 20,
// };

// console.log(user.age);
// console.log(typeof user);

// Numbers - Methods

// let num = 10.215;
// const new_num = num.toString();
// console.log(typeof new_num);

// console.log(Math.floor(num));
// console.log(Math.ceil(num));

// console.log(num.toFixed(0));
// console.log(Math.random() * 1000);

// create a function that return an otp number , every time you run that function it should return unique value

// string method

// let str = "javascript";
// console.log(str.length);
// console.log(str.at(str.length - 1));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.indexOf("fav"));
// console.log(str.includes("the"));
// let str2 = str.slice(4);
// console.log(str2);
// let str3 = "hello";
// console.log(str3.trim());
// console.log(str3.split(" "));

// create a function that takes a string "Welcome to my home" and then convert this in array and return the last word of this perticular string
// output = home

// let arr = [1, 2, 3, 4, 5];
// console.log(typeof arr);
// console.log(arr.length);
// console.log(arr.length - 1);
// arr.push(6);
// console.log(arr);
// arr.pop();
// console.log(arr);

// let arr2 = new Array();
// arr2 = [1, 2, 3, 4, 5];
// console.log(arr2.length);
// console.log(typeof arr2);

// very important
let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 1);
// console.log(arr);
// const arr2 = arr.slice(1, 3);
// console.log(arr2);
// let newarr = [6, 7];
// let arr3 = arr.concat(newarr);
// console.log(arr3);
// let arr2 = arr.forEach(function (ele) {
//   console.log(ele * 2);
// });
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i] * 2);
// }

// very important
// let arr2 = arr.filter(function (ele) {
//   return ele % 2 == 0;
// });
// console.log(arr2);

// very important
// let arr3 = arr.map(function (ele) {
//   return ele * 2;
// });
// console.log(arr3);

// let arr4 = arr.find(function (ele) {
//   return ele == 4;
// });

// console.log(arr4);
username = {
  age: 20,
  class: "A",
  address: {
    houseNo: 24,
  },
};

const newobj = JSON.stringify(username);
console.log(newobj);

// https
const backobj = JSON.parse(newobj);
console.log(backobj);
