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
    return `<li class="todo-item" data-index="${index}">
                    <input type="text" value="${task}" readonly>
                    <button class="edit">Edit</button>
                    <button class="delete">Delete</button>
                </li>`;
  }

  $("#add-todo").on("click", function () {
    let newTask = $("#new-todo").val().trim();
    if (newTask) {
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks.push(newTask);
      saveTasks(tasks);
      loadTasks();
      $("#new-todo").val("");
    }
  });

  $("#todo-list").on("click", ".edit", function () {
    let $taskItem = $(this).closest(".todo-item");
    let index = $taskItem.data("index");
    let $input = $taskItem.find("input");

    if ($input.attr("readonly")) {
      $input.removeAttr("readonly").focus();
      $(this).text("Save");
    } else {
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks[index] = $input.val().trim();
      saveTasks(tasks);
      loadTasks();
    }
  });

  $("#todo-list").on("click", ".delete", function () {
    let index = $(this).closest(".todo-item").data("index");
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    saveTasks(tasks);
    loadTasks();
  });

  loadTasks();
});
