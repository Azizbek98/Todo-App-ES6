/* === Selectors === */
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");
const alertNotify = document.querySelector(".alert");

/* === Event Listeners === */
document.addEventListener("DOMContentLoaded", getTodos); // checking whether page was loaded or not, then run getTodos function
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);

/* === Functions === */
// adding todos function
function addTodo(event) {
  event.preventDefault(); // preventing from submitting form

  // checking whether todo-input value is empty or not for displaying alert
  if (!todoInput.value) {
    alertNotify.style.display = "flex";
    todoInput.style.border = "4px solid red";
    setInterval(() => {
      alertNotify.style.display = "none";
      todoInput.style.border = "none";
    }, 2000);
  } else {
    alertNotify.style.display = "none";

    // creating todo DIV here
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // creating li here
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo); // creating li element inside div

    // adding todo to local storage
    saveToLocalStorage(todoInput.value);

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
}

// deleting or completing todos
function deleteCheck(event) {
  const itemSelected = event.target;

  // deleting selected item
  if (itemSelected.classList[0] === "remove-btn") {
    const todo = itemSelected.parentElement;
    // animation of deleting
    todo.classList.add("fall");

    // removing todo from local storage
    removeLocalTodos(todo);

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

// todos filter function
function filterTodo(event) {
  const todos = todoList.childNodes;
  console.log(todos);
  todos.forEach((todoTask) => {
    console.log(todoTask);
    switch (event.target.value) {
      case "all": // displays all tasks
        todoTask.style.display = "flex";
        break;
      case "completed": // filters all completed tasks
        if (todoTask.classList.contains("completed")) {
          todoTask.style.display = "flex";
        } else {
          todoTask.style.display = "none";
        }
        break;
      case "uncompleted": // filters all uncompleted tasks
        if (!todoTask.classList.contains("completed")) {
          todoTask.style.display = "flex";
        } else {
          todoTask.style.display = "none";
        }
        break;
    }
  });
}

// save todos to the local storage
function saveToLocalStorage(todo) {
  // check whether I have todo in my local storage or not
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}

// display todos from local storage after updating page
function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach(function (todo) {
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    const removeButton = document.createElement("button");
    removeButton.innerHTML = '<i class="fas fa-trash"></i>';
    removeButton.classList.add("remove-btn");
    todoDiv.appendChild(removeButton);

    todoList.appendChild(todoDiv);
  });
}

// remove todos from local storage
function removeLocalTodos(todo) {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  const todoIndex = todo.children[0].innerText;
  todos.splice(todos.indexOf(todoIndex), 1); // removing element from specific index. 1 is here amount of element to be deleted
  localStorage.setItem("todos", JSON.stringify(todos)); // stores updated list of todos to local storage
}
