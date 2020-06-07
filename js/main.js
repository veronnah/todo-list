const tasksList = document.querySelector(".list");
let tasks = [];

const form = document.querySelector(".form__new-task");

const tasksJSON = localStorage.getItem('tasks');

if(tasksJSON){

    let tasksArray = JSON.parse(tasksJSON);
    tasks = tasksArray;
    tasks.forEach(function(item){

    const taskHTML = `
    <li class="list-item">
    <span class="task-title">${item}</span>
    <button type="button" data-action="delete-task" class="btn__delete-task">delete</button>
    </li>
    `;

    tasksList.insertAdjacentHTML('beforeend', taskHTML);
    });
  
}

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const taskInput = document.querySelector(".input__add-task");
    const taskText = taskInput.value;
    console.log(taskText);

    tasks.push(taskText);

    localStorage.setItem('tasks', JSON.stringify(tasks));   

    const taskHTML = `
    <li class="list-item">
    <span class="task-title">${taskText}</span>
    <button type="button" data-action="delete-task" class="btn__delete-task">delete</button>
    </li>
    `;

    tasksList.insertAdjacentHTML('beforeend', taskHTML);

    taskInput.value = "";

});

tasksList.addEventListener('click', function(event){

    if(event.target.getAttribute("data-action") === "delete-task"){

    const taskText = event.target.closest('li').querySelector('.task-title').textContent;

    const taskIndex = tasks.indexOf(taskText);

    tasks.splice(taskIndex, 1);

    event.target.parentElement.remove();

    localStorage.setItem('tasks', JSON.stringify(tasks));
    }

});

