let mainTodoContainer = document.getElementById('todos');
let input = document.querySelector('.todo_input');
let addingButton = document.querySelector('.add-item');
let deleteAllBtn = document.querySelector('.deleteBtn');

addingButton.addEventListener('click', function(e){
    if(input.value.trim()){
        let ulTag = document.createElement('ul');
        ulTag.classList.add('todo-list-container');

        let todoList = document.createElement('div');
        todoList.classList.add('todo-list');

        let liTag = document.createElement('li');
        liTag.innerHTML = input.value;
        liTag.classList.add('todo-item');

        let buttonDiv = document.createElement('div');
        buttonDiv.classList.add('button');

        let completeButton = document.createElement('button');
        completeButton.classList.add('completed');
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
        
        let completeButton = document.createElement('button');
        completeButton.classList.add('editBtn');
        completeButton.innerHTML = '<i class="fas fa-edit"></i>';

        let completeButton = document.createElement('button');
        completeButton.classList.add('trash');
        completeButton.innerHTML = '<i class="fas fa-trash"></i>';

        ulTag.appendChild(todoList);
        todoList.appendChild(liTag);
        todoList.appendChild(buttonDiv)
        
    }
})