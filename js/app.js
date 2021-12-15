// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

// Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

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

function deleteCheck(event) {
  const itemSelected = event.target;

  // deleting selected item
  if (itemSelected.classList[0] === "remove-btn") {
    const todo = itemSelected.parentElement;
    // animation of deleting
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }

  // completing selected item
  if (itemSelected.classList[0] === "complete-btn") {
    const todo = itemSelected.parentElement;
    todo.classList.toggle("completed"); // adding completed task to todo item
  }
}

function filterTodo(event) {
  const todos = todoList.childNodes;
  console.log(todos);
  todos.forEach((todoTask) => {
    console.log(todoTask);
    switch (event.target.value) {
      case "all":
        todoTask.style.display = "flex";
        break;
      case "completed":
        if (todoTask.classList.contains("completed")) {
          todoTask.style.display = "flex";
        } else {
          todoTask.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todoTask.classList.contains("completed")) {
          todoTask.style.display = "flex";
        } else {
          todoTask.style.display = "none";
        }
        break;
    }
  });
}
