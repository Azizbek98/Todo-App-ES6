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
        
        let editBtn = document.createElement('button');
        editBtn.classList.add('editBtn');
        editBtn.innerHTML = '<i class="fas fa-edit"></i>';
        editBtn.onclick = function(){
            editWorking(liTag);
        }

        let trashButton = document.createElement('button');
        trashButton.classList.add('trash');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';

        ulTag.appendChild(todoList);
        todoList.appendChild(liTag);
        todoList.appendChild(buttonDiv)
        buttonDiv.appendChild(completeButton);
        buttonDiv.appendChild(editBtn);
        buttonDiv.appendChild(trashButton);

        mainTodoContainer.appendChild(ulTag);

        todoList.addEventListener('click', function(e){
            let items = e.target;
            if(items.classList[0] === 'completed'){
                let todo = items.parentElement;
                let todo2 = todo.parentElement;
                todo2.classList.add('line-through');
            }
            else if(items.classList[0] === 'trash'){
                let todo = items.parentElement;
                let todo2 = todo.parentElement;
                let todo3 = todo2.parentElement;
                todo3.classList.add('fall');
                todo3.addEventListener('transitionend', function(e){
                    todo3.remove();
                });
            }
        })

        input.value = '';
    }
    else if(input.value === ''){
        alert("Please enter taskname at input field ...");
    }
})

function editWorking(e){
    let editValue = prompt("Edit this taskname ...", e.firstChild.nodeValue);
    e.firstChild.nodeValue = editValue;
}

function deleteAllElements(){
    let gettingUlTag = document.querySelectorAll('.todo-list-container');
    for(let i=0; i<gettingUlTag.length; i++){
        gettingUlTag[i].remove();
    }
    input.value = '';
}