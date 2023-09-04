const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        const listItem = document.createElement("li");
        listItem.textContent = taskText;
        listItem.addEventListener("click", toggleTaskStatus);
        taskList.appendChild(listItem);
        taskInput.value = "";
    }
}


function toggleTaskStatus(event) {
    event.target.classList.toggle("completed");
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        addTask();
    }
});