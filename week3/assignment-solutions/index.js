// 1. Assigning Username to Admin
let username;
let admin;

username = "john";
admin = username ? username : "No username provided";
console.log(admin);

// 2. Adding Numbers
function addNumbers(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    return "Invalid input";
  }
  return a + b;
}
console.log(addNumbers(10, 20)); // 30
console.log(addNumbers("10", 20)); // Invalid input

// 3. Get Last Word
function getLastWord(str) {
  let words = str.split(" ");
  return words[words.length - 1];
}
console.log(getLastWord("Welcome to my home")); // home

// 4. Log User's City
let user = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
  },
};
console.log(user.address.city); // New York

// 5. Check Voting Eligibility
function isEligibleToVote(age) {
  return age >= 18 ? "You are eligible" : "You are not eligible";
}
console.log(isEligibleToVote(20)); // You are eligible

const isEligibleToVoteArrow = (age) =>
  age >= 18 ? "You are eligible" : "You are not eligible";
console.log(isEligibleToVoteArrow(16)); // You are not eligible

// 6. Find Maximum Number in an Array
let numbers = [1, 2, 3, 4, 5, 6, 10, 20, 15];

// Using Math.max
function findMaxNumber(arr) {
  return Math.max(...arr);
}
console.log(findMaxNumber(numbers)); // 20

// Using for loop
function findMaxNumberLoop(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log(findMaxNumberLoop(numbers)); // 20

// 7. Generate OTP
function createOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}
console.log(createOTP()); // e.g., 345678

// 8. Calculate Average Grade

let student = {
  name: "John",
  age: 20,
  grades: [80, 85, 90],
};

function calculateAverageGrade(grades) {
  if (grades.length === 0) {
    return "No grades available";
  }
  let sum = grades.reduce((acc, grade) => acc + grade, 0);
  return sum / grades.length;
}
console.log(calculateAverageGrade(student.grades)); // 85

// 9. Merge Two Arrays
function mergeArrays(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}
let array1 = [1, 2, 3, 4];
let array2 = [3, 4, 5, 6];
console.log(mergeArrays(array1, array2)); // [1, 2, 3, 4, 5, 6]

// 10. Convert to Uppercase and Log Length
function convertToUpperCase(str) {
  let upperStr = str.toUpperCase();
  console.log(upperStr); // JAVASCRIPT IS FUN
  console.log(upperStr.length); // 16
}
convertToUpperCase("JavaScript is fun");

// 11 already done in class

// 12
function findUserById(users, id) {
  return users.find((user) => user.id === id);
}

// Sample usage
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jack" },
];
console.log(findUserById(users, 2)); // { id: 2, name: "Jane" }

// 13
const tasks = [
  { description: "Task 1", dueDate: "2024-06-05" },
  { description: "Task 2", dueDate: "2024-06-10" },
  { description: "Task 3", dueDate: "2024-05-25" },
  { description: "Task 4", dueDate: "2024-06-01" },
];

function filterOverdueTasks(tasks) {
  const currentDate = new Date();
  return tasks.filter((task) => new Date(task.dueDate) < currentDate);
}

// 14
// Sample array of user objects
const userdata = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Emma", lastName: "Smith" },
  { firstName: "Alex", lastName: "Johnson" },
];

function createUsernames(userdata) {
  return users.map(
    (user) =>
      user.firstName.charAt(0).toLowerCase() + user.lastName.toLowerCase()
  );
}

//15
const products = [
  { name: "Product 1", price: 50 },
  { name: "Product 2", price: 100 },
  { name: "Product 3", price: 75 },
];
function findExpensiveProducts(products, thresholdPrice) {
  return products.find((product) => product.price > thresholdPrice);
}
