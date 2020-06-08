const tasksList = document.querySelector(".list");
let tasks = [];

const form = document.querySelector(".form__new-task");

const tasksJSON = localStorage.getItem('tasks');

if (tasksJSON) {

    let tasksArray = JSON.parse(tasksJSON);
    tasks = tasksArray;
    tasks.forEach(function (item) {

        const taskHTML = `
    <li class="list-item" data-action = "add-class">
    <span class="task-title">${item}</span>
    <button type="button" data-action="delete-task" class="btn__delete-task">✘</button>
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
    <li class="list-item" data-action = "add-class">
    <span class="task-title">${taskText}</span>
    <button type="button" data-action="delete-task" class="btn__delete-task">✘</button>
    </li>
    `;

    tasksList.insertAdjacentHTML('beforeend', taskHTML);

    taskInput.value = "";
    let listItem = document.querySelectorAll(".task-title");
    for (let i = 0; i < listItem.length; i++) {
        const liItem = listItem[i];
        liItem.onclick = function () {
            if (this.classList.contains("task-title")) {
                this.classList.add("text-decor");
            } else {
                this.classList.add("task-title");
                this.classList.remove("text-decor");
            }
        }

    }

});

tasksList.addEventListener('click', function (event) {

    if (event.target.getAttribute("data-action") === "delete-task") {

        const taskText = event.target.closest('li').querySelector('.task-title').textContent;

        const taskIndex = tasks.indexOf(taskText);

        tasks.splice(taskIndex, 1);

        event.target.parentElement.remove();

        localStorage.setItem('tasks', JSON.stringify(tasks));

    }
});

let listItem = document.querySelectorAll(".task-title");
for (let i = 0; i < listItem.length; i++) {
    const liItem = listItem[i];
    liItem.onclick = function () {
        if (this.classList.contains("task-title")) {
            this.classList.add("text-decor");
        } else {
            this.classList.add("task-title");
            this.classList.remove("text-decor");
        }
    }

}