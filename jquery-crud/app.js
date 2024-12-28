$(document).ready(function () {
  function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    $("#todo-list").empty();
    tasks.forEach(function (task, index) {
      $("#todo-list").append(createTaskElement(task, index));
    });
  }

  function saveTasks(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function createTaskElement(task, index) {
    const dateStr = new Date(task.createdAt).toLocaleString();
    return `<li class="todo-item ${task.importance}" data-index="${index}">
                <input type="checkbox" class="task-check" ${task.completed ? 'checked' : ''}>
                <div class="task-content">
                    <input type="text" value="${task.text}" readonly class="${task.completed ? 'completed' : ''}">
                    <span class="task-meta">
                        Created: ${dateStr}
                    </span>
                </div>
                <div class="task-actions">
                    <select class="task-importance">
                        <option value="low" ${task.importance === 'low' ? 'selected' : ''}>Low</option>
                        <option value="medium" ${task.importance === 'medium' ? 'selected' : ''}>Medium</option>
                        <option value="high" ${task.importance === 'high' ? 'selected' : ''}>High</option>
                    </select>
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </div>
            </li>`;
  }

  $("#new-todo").on("keypress", function (e) {
    if (e.which === 13) {
      $("#add-todo").click();
    }
  });

  $("#add-todo").on("click", function () {
    let newTask = $("#new-todo").val().trim();
    if (newTask) {
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.push({
        text: newTask,
        completed: false,
        createdAt: new Date().toISOString(),
        importance: $("#task-importance").val() || "medium"
      });
      saveTasks(tasks);
      loadTasks();
      $("#new-todo").val("");
      updateTaskCount();
    }
  });

  $("#todo-list").on("change", ".task-check", function () {
    let $taskItem = $(this).closest(".todo-item");
    let index = $taskItem.data("index");
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    tasks[index].completed = $(this).is(":checked");
    $taskItem.find("input[type='text']").toggleClass("completed");
    saveTasks(tasks);
    updateTaskCount();
  });

  $("#todo-list").on("click", ".edit", function () {
    let $taskItem = $(this).closest(".todo-item");
    let $taskInput = $taskItem.find("input[type='text']");
    let $editButton = $(this);

    if ($editButton.text() === "Edit") {
        // Enter edit mode
        $taskInput.prop("readonly", false).focus();
        $editButton.text("Save").addClass("editing");
    } else {
        // Save changes
        let index = $taskItem.data("index");
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        let newText = $taskInput.val().trim();

        if (newText) {
            tasks[index].text = newText;
            saveTasks(tasks);
            $taskInput.prop("readonly", true);
            $editButton.text("Edit").removeClass("editing");
        }
    }
  });

  $("#todo-list").on("click", ".delete", function () {
    let $taskItem = $(this).closest(".todo-item");
    let index = $taskItem.data("index");
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    
    tasks.splice(index, 1);
    saveTasks(tasks);
    loadTasks();
    updateTaskCount();
  });

  $("#todo-list").on("change", ".task-importance", function() {
    let $taskItem = $(this).closest(".todo-item");
    let index = $taskItem.data("index");
    let newImportance = $(this).val();
    
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks[index].importance = newImportance;
    
    // Update the task item's class for color coding
    $taskItem.removeClass("low medium high").addClass(newImportance);
    
    saveTasks(tasks);
  });

  function updateTaskCount() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    let remaining = tasks.filter(task => !task.completed).length;
    $("#task-count").text(`${remaining} tasks remaining`);
  }

  loadTasks();
  updateTaskCount();
});
