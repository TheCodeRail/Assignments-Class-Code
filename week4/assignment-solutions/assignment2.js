// Function to add a new todo item
function addTodo(title, desc) {
  // Create a new div element for the todo item
  const todoItem = document.createElement("div");
  todoItem.className = "todo-item";

  // Create and append the title element
  const todoTitle = document.createElement("h3");
  todoTitle.textContent = title;
  todoItem.appendChild(todoTitle);

  // Create and append the description element
  const todoDesc = document.createElement("p");
  todoDesc.textContent = desc;
  todoItem.appendChild(todoDesc);

  // Append the todo item to the todo list
  document.getElementById("todo-list").appendChild(todoItem);
}

// Function to handle the submit button click
function handleSubmit() {
  const title = document.getElementById("title").value;
  const desc = document.getElementById("desc").value;

  if (title && desc) {
    addTodo(title, desc);

    // Clear the input fields
    document.getElementById("title").value = "";
    document.getElementById("desc").value = "";
  } else {
    alert("Please enter both title and description.");
  }
}

// Add event listener to the submit button
document.getElementById("submit").addEventListener("click", handleSubmit);
