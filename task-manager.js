function weeklyGoal(userName, dailyGoal, bonusTasks) {

    let weeklyGoal = dailyGoal * 5;

    let totalGoal = weeklyGoal + bonusTasks;

    let output =
        `${userName}, your weekly task goal is ${totalGoal} tasks!`;

    document.getElementById("goal-message").innerHTML = output;
}

document.getElementById("goal-btn").addEventListener("click", function (event) {

    event.preventDefault();

    let userName =
        document.getElementById("user-name").value;

    let dailyGoal =
        parseInt(document.getElementById("daily-goal").value);

    let bonusTasks =
        parseInt(document.getElementById("bonus-tasks").value);

    weeklyGoal(userName, dailyGoal, bonusTasks);
});

let myTasks = [];

const taskListDiv = document.getElementById("task-list");

const userTaskList = document.createElement("ul");
userTaskList.id = "user-tasks";

taskListDiv.appendChild(userTaskList);

function displayTasks() {

    userTaskList.innerHTML = "";

    myTasks.forEach(task => {

        const taskItem = document.createElement("li");

        taskItem.textContent =
            `${task.name} (${task.priority} Priority) `;

        if (task.isImportant) {
            taskItem.style.color = "red";
            taskItem.style.fontWeight = "bold";
        }

        if (task.isCompleted) {
            taskItem.style.textDecoration = "line-through";
        }
        
        if (task.priority === "High") {
            taskItem.style.backgroundColor = "#ffcccc";
        } else if (task.priority === "Medium") {
            taskItem.style.backgroundColor = "#fff3cd";
        } else {
            taskItem.style.backgroundColor = "#d4edda";
        }

        taskItem.style.padding = "10px";
        taskItem.style.marginBottom = "10px";
        taskItem.style.borderRadius = "5px";

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";

        completeBtn.addEventListener("click", function () {

            task.isCompleted = !task.isCompleted;

            console.log(JSON.stringify(myTasks));

            displayTasks();
        });

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";

        editBtn.addEventListener("click", function () {

            const newName = prompt(
                "Edit task:",
                task.name
            );

            if (newName && newName.trim() !== "") {

                task.name = newName.trim();

                console.log(JSON.stringify(myTasks));

                displayTasks();
            }
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";

        deleteBtn.addEventListener("click", function () {

            myTasks = myTasks.filter(
                currentTask => currentTask.id !== task.id
            );

            console.log(JSON.stringify(myTasks));

            displayTasks();
        });

        completeBtn.style.marginLeft = "10px";
        editBtn.style.marginLeft = "5px";
        deleteBtn.style.marginLeft = "5px";

        taskItem.appendChild(completeBtn);
        taskItem.appendChild(editBtn);
        taskItem.appendChild(deleteBtn);

        userTaskList.appendChild(taskItem);
    });
}

document.getElementById("add-task").addEventListener("click", function () {

    const taskName =
        document.getElementById("task-name").value.trim();

    const priority =
        document.getElementById("priority").value;

    const isImportant =
        document.getElementById("important-task").checked;

    if (taskName === "") {
        return;
    }

    const task = {
        id: Date.now(),
        name: taskName,
        priority: priority,
        isImportant: isImportant,
        isCompleted: false
    };

    myTasks.push(task);

    console.log(JSON.stringify(myTasks));

    displayTasks();

    document.getElementById("task-name").value = "";
    document.getElementById("important-task").checked = false;
});

document.getElementById("delete-list").addEventListener("click", function () {

    myTasks = [];

    console.log(JSON.stringify(myTasks));

    displayTasks();
});
