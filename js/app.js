// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event listeners
todoButton.addEventListener("click", addTodo);

// Functions
function addTodo(event) {
  event.preventDefault(); // preventing from submitting form
  console.log("hello from todo app");
}
