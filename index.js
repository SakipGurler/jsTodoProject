const addTask = document.getElementById('add-task');
const taskContainer = document.getElementById('task-container');
const inputTask = document.getElementById('input-task');

addTask.addEventListener('click', function () {
    const task = document.createElement('div');
    task.classList.add('task');

    const li = document.createElement('li');
    li.textContent = inputTask.value;
    task.appendChild(li);

    const checkButton = document.createElement("button");
    checkButton.classList.add('checkTask');
    const checkIcon = document.createElement('i');
    checkIcon.classList.add('fa-solid', 'fa-check');
    checkButton.appendChild(checkIcon);
    task.appendChild(checkButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add('deleteTask');
    const deleteIcon = document.createElement('i');
    deleteIcon.classList.add('fa-solid', 'fa-trash-can');
    deleteButton.appendChild(deleteIcon);
    task.appendChild(deleteButton);

    if (inputTask.value === "") {
        alert('Please Enter a Task');
    } else {
        taskContainer.appendChild(task);
    }

    inputTask.value = "";

    checkButton.addEventListener('click', function () {
        li.style.textDecoration = "line-through";
    });

    deleteButton.addEventListener('click', function () {
        task.remove();
    });

    inputTask.focus();
});

inputTask.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
        addTask.click();
    }
});

window.addEventListener('load', () => {
    inputTask.focus();
});
