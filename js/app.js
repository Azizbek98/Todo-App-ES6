// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event listeners
todoButton.addEventListener("click", addTodo);

// Functions
function addTodo(event) {
  event.preventDefault(); // preventing from submitting form

  // creating todo DIV here
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // creating li here
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo); // creating li element inside div

  // completing task button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  // removing task button
  const removeButton = document.createElement("button");
  removeButton.innerHTML = '<i class="fas fa-trash"></i>';
  removeButton.classList.add("remove-btn");
  todoDiv.appendChild(removeButton);

  // appending to todo-list
  todoList.appendChild(todoDiv);

  // clearing todoInput value
  todoInput.value = "";
}
