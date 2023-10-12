document.addEventListener('DOMContentLoaded', () =>{
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    taskForm.addEventListener('submit',  (e)=> {
        e.preventDefault();
        const taskInput = document.getElementById('task-input').value;
        if (taskInput.trim() === '') return;

        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskInput}</span>
            <button class="complete-button">COMPLETE</button>
            <button class="delete-button">X</button>
        `;
        taskList.appendChild(taskItem);

        
        document.getElementById('task-input').value = '';

        
        const completeButton = taskItem.querySelector('.complete-button');
        const deleteButton = taskItem.querySelector('.delete-button');

        completeButton.addEventListener('click',  ()=> {
            
            taskItem.classList.toggle('completed');
        });

        deleteButton.addEventListener('click',  ()=> {
         
            taskList.removeChild(taskItem);
        });
    });
});
