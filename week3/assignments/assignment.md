# JavaScript Questions for Building Logics

This repository contains a set of scenario-based JavaScript interview questions designed to help you practice and master key JavaScript concepts. Each question targets specific aspects of the language, ensuring a comprehensive understanding of JavaScript.

## Questions

### 1. Assigning Username to Admin
Create a simple JavaScript program that assigns a username to an admin and logs the admin name. Also, handle a scenario where the username might be undefined and log "No username provided" instead.

### 2. Adding Numbers
Write a function addNumbers that takes two parameters, adds them, and returns the result. Ensure you handle scenarios where the inputs might not be numbers by returning "Invalid input".

### 3. Get Last Word
You are given a string "Welcome to my home". Write a function getLastWord that converts this string into an array of words and returns the last word.

### 4. Log User's City
Create a JavaScript program that defines an object user with properties name, age, and address (which is another object with properties street and city). Log the user's city to the console.

### 5. Check Voting Eligibility
Write a JavaScript function isEligibleToVote that takes an age as input and returns "You are eligible" if the age is 18 or older, and "You are not eligible" otherwise. Use both function declarations and arrow functions to implement this.

### 6. Find Maximum Number in an Array
Create an array of numbers and write a function `findMaxNumber` that finds and returns the maximum number in the array. Use both the `Math.max` method and a `for` loop to achieve this.

### 7. Generate OTP
Write a function `createOTP` that generates and returns a unique 6-digit OTP every time it is called. Use the `Math.random` and `Math.floor` functions.

### 8. Calculate Average Grade
Given an object `student` with properties `name`, `age`, and `grades` (an array of numbers), write a function `calculateAverageGrade` that returns the average of the grades. Handle scenarios where the `grades` array might be empty by returning "No grades available".

### 9. Merge Two Arrays
Write a function `mergeArrays` that takes two arrays as input and returns a new array that is a combination of both. Ensure there are no duplicate elements in the resultant array.

### 10. Convert to Uppercase and Log Length
Given a string "JavaScript is fun", write a function `convertToUpperCase` that converts the string to uppercase and logs the length of the string.

### 11. Filter Even Numbers
Create an array of numbers and write a function `getEvenNumbers` that filters out the even numbers from this array and returns them.

### 12. Find User by ID
Given an array of user objects, each with an `id` and `name` property, write a function `findUserById` that returns the user object with a specific `id`. Use the `find` method to achieve this.
```
let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Jack" }
];
```

### 13. Filter Out Overdue Tasks
Given an array of task objects, each with a `description` and a `dueDate` property, write a function `filterOverdueTasks` that returns an array of tasks that are overdue. A task is considered overdue if the `dueDate` is earlier than the current date.

```
const tasks = [
  { description: "Task 1", dueDate: "2024-06-05" },
  { description: "Task 2", dueDate: "2024-06-10" },
  { description: "Task 3", dueDate: "2024-05-25" },
  { description: "Task 4", dueDate: "2024-06-01" },
];
```

### 14. Create List of Usernames
Given an array of user objects, each with a `firstName` and `lastName` property, write a function `createUsernames` that returns an array of usernames. A username is created by concatenating the first letter of the `firstName` with the `lastName`, all in lowercase.

```
const users = [
  { firstName: "John", lastName: "Doe" },
  { firstName: "Emma", lastName: "Smith" },
  { firstName: "Alex", lastName: "Johnson" },
];
```

### 15. Find Expensive Products
Given an array of product objects, each with a `name` and `price` property, write a function `findExpensiveProducts` that returns the first product that costs more than a specified amount.

```
const products = [
  { name: "Product 1", price: 50 },
  { name: "Product 2", price: 100 },
  { name: "Product 3", price: 75 },
];
```


Notice- Try to use google instead of using ChatGpt