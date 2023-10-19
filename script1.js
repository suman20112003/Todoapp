document.addEventListener('DOMContentLoaded', () => {
    let taskForm = document.getElementById('task-form');
    let taskList = document.getElementById('task-list');

    let storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function updateLocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(storedTasks));
    }

    function addTaskToLocalStorage(taskText) {
        storedTasks.push(taskText);
        updateLocalStorage();
    }

    function removeTaskFromLocalStorage(taskText) {
        let index = storedTasks.indexOf(taskText);
        if (index !== -1) {
            storedTasks.splice(index, 1);
            updateLocalStorage();
        }
    }

    for (const taskText of storedTasks) {
        createTaskItem(taskText);
    }

    function createTaskItem(taskText) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="complete-button">COMPLETE</button>
            <button class="delete-button">X</button>
        `;
        taskList.appendChild(taskItem);

        let completeButton = taskItem.querySelector('.complete-button');
        let deleteButton = taskItem.querySelector('.delete-button');

        completeButton.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });

        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
            removeTaskFromLocalStorage(taskText);
        });
    }

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let taskInput = document.getElementById('task-input').value;
        if (taskInput.trim() === '') return;

        createTaskItem(taskInput);
        document.getElementById('task-input').value = '';

        addTaskToLocalStorage(taskInput);
    });
});
