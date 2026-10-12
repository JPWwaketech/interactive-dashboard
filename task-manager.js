
function weeklyGoal(userName, dailyGoal, bonusTasks) {

    let weeklyGoal = dailyGoal * 5;

    let totalGoal = weeklyGoal + bonusTasks;

    let output = `${userName}, your weekly task goal is ${totalGoal} tasks!`;

    document.getElementById("goal-message").innerHTML = output;
}

document.getElementById("goal-btn").addEventListener("click", function(event) {

    event.preventDefault(); 
    
    let userName = document.getElementById("user-name").value;
    let dailyGoal = parseInt(document.getElementById("daily-goal").value);
    let bonusTasks = parseInt(document.getElementById("bonus-tasks").value);

    weeklyGoal(userName, dailyGoal, bonusTasks);
});


let myTasks = [];

const taskListDiv = document.getElementById("task-list");

const userTaskList = document.createElement("ul");
userTaskList.id = "user-tasks";

taskListDiv.appendChild(userTaskList);

const addTaskBtn = document.getElementById("add-task");

addTaskBtn.addEventListener("click", function () {

    const taskInput = document.getElementById("task-name");
    const taskText = taskInput.value.trim();

    if (taskText === "") return; 

    myTasks.push(taskText);

    const newTaskItem = document.createElement("li");
    newTaskItem.textContent = taskText;

    userTaskList.appendChild(newTaskItem);

    taskInput.value = "";
});
