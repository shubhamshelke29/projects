document.getElementById("add-task-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
    }
  });
  
  function addTask(taskText) {
    var taskItem = document.createElement("li");
    taskItem.classList.add("task");
  
    var taskSpan = document.createElement("span");
    taskSpan.innerText = taskText;
    taskSpan.classList.add("task");
    taskItem.appendChild(taskSpan);
  
    var timestampSpan = document.createElement("span");
    timestampSpan.innerText = formatDate(new Date());
    timestampSpan.classList.add("timestamp");
    taskItem.appendChild(timestampSpan);
  
    var completeButton = document.createElement("button");
    completeButton.innerText = "Complete";
    completeButton.classList.add("complete");
    completeButton.addEventListener("click", function() {
      markAsComplete(taskItem);
    });
    taskItem.appendChild(completeButton);
  
    var deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", function() {
      deleteTask(taskItem);
    });
    taskItem.appendChild(deleteButton);
  
    document.getElementById("pending-tasks").appendChild(taskItem);
  }
  
  function markAsComplete(taskItem) {
    taskItem.classList.add("completed");
    document.getElementById("completed-tasks").appendChild(taskItem);
    taskItem.querySelector("button.complete").remove();
  }
  
  function deleteTask(taskItem) {
    taskItem.remove();
  }
  
  function formatDate(date) {
    var options = {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric"
    };
    return date.toLocaleDateString("en-US", options);
  }document.getElementById("add-task-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
    }
  });
  
  function addTask(taskText) {
    var taskItem = document.createElement("li");
    taskItem.classList.add("task");
  
    var taskSpan = document.createElement("span");
    taskSpan.innerText = taskText;
    taskSpan.classList.add("task");
    taskItem.appendChild(taskSpan);
  
    var buttonsDiv = document.createElement("div");
    buttonsDiv.classList.add("buttons");
  
    var completeButton = document.createElement("button");
    completeButton.innerHTML = "&#10004;"; // Checkmark symbol
    completeButton.classList.add("complete");
    completeButton.addEventListener("click", function() {
      markAsComplete(taskItem);
    });
    buttonsDiv.appendChild(completeButton);
  
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "&#10008;"; // Cross symbol
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", function() {
      deleteTask(taskItem);
    });
    buttonsDiv.appendChild(deleteButton);
  
    taskItem.appendChild(buttonsDiv);
  
    document.getElementById("pending-tasks").appendChild(taskItem);
  }
  