function delayedGreeting() {
  setTimeout(() => {
    console.log("Hello, World!");
  }, 2000);
}

// Call the function to see the result
delayedGreeting();

// answer 2

function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "John Doe", age: 30 });
    }, 3000);
  });
}

fetchUserData().then((user) => {
  console.log(user);
});

// answer 3

async function fetchUserData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "John Doe", age: 30 });
    }, 3000);
  });
}

async function getUserData() {
  const user = await fetchUserData();
  console.log(user);
}

// Call the function to see the result
getUserData();

//answer 4

async function fetchCatFacts() {
  try {
    const response = await fetch("https://catfact.ninja/facts");
    const data = await response.json();
    const facts = data.data.map((fact) => fact.fact);
    console.log(facts);
  } catch (error) {
    console.error("Error fetching cat facts:", error);
  }
}

// Call the function to see the result
fetchCatFacts();
