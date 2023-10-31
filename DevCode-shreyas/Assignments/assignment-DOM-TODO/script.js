// const form = document.createElement("form");
// const inputBox = document.createElement("input");
// const button = document.createElement("button");
// const list = document.createElement("ul");
// button.textContent = "Add";
// form.append(inputBox, button);
// document.body.append(form, list);

// button.addEventListener("click", (e) => {
//   e.preventDefault();
//   const li = document.createElement("li");
//   li.textContent = inputBox.value;
//   list.append(li);

//   li.addEventListener("click", () => {
//     list.removeChild(li);
//   });

//   inputBox.value = "";
// });

document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");

  addTaskButton.addEventListener("click", function (e) {
    e.preventDefault();

    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const listItem = document.createElement("li");
      listItem.textContent = taskText;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.className = "delete-button";

      listItem.appendChild(deleteButton);
      taskList.appendChild(listItem);

      deleteButton.addEventListener("click", function () {
        taskList.removeChild(listItem);
      });

      taskInput.value = "";
    }
  });
});
