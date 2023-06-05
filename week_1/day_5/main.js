class Task {
  constructor(taskName, complete) {
    this.taskName = taskName;
    this.complete = false;
  }

  static fromJSON(json) {
    const task = new Task(json.taskName);
    task.completed = json.completed;
    return new Task(json.taskName, json.complete);
  }
}

class UI {
  constructor() {
    this.form = document.getElementById("form");

    this.taskName = document.getElementById("task-input");

    this.tableBody = document.getElementById("table-body");

    this.form.addEventListener("submit", (event) => this.onFormSubmit(event));

    this.taskList = [];
    this.loadTasksFromLocalStorage();
    this.renderTaskTable();
  }

  onFormSubmit(event) {
    event.preventDefault(); // prevent the page from refreshing

    // prevent null task input
    if (this.taskName.value == "") {
      return;
    }

    const task = new Task(this.taskName.value); // default for completeness is false

    this.taskList.push(task);

    this.saveTasksToLocalStorage();
    this.renderTaskTable();

    this.taskName.value = ""; // Reset here
  }

  makeRadioButton(complete) {
    if (complete) {
      return `<form>
        <input class="form-check-input text-center" type="radio" name="completeCheck" id="completeCheck" checked>
        <label class="form-check-label" for="completeCheck"></label></form>`;
    } else {
        return `<form>
        <input class="form-check-input text-center" type="radio" name="completeCheck" id="completeCheck">
        <label class="form-check-label" for="completeCheck"></label></form>`;
    }
  }

  renderTaskTable() {
    this.tableBody.innerHTML = "";

    for (let i = 0; i < this.taskList.length; i++) {
      const task = this.taskList[i];

      const tr = this.createTaskTableRow(task);
      this.tableBody.appendChild(tr);
    }
  }

  createTaskTableRow(task) {
    const tr = document.createElement("tr");

    const tdTaskName = document.createElement("td");
    const tdComplete = document.createElement("td");
    const tdActions = document.createElement("td");

    tdTaskName.innerHTML = task.taskName;
    tdComplete.innerHTML = this.makeRadioButton(task.complete);

    const actionButton = this.createDeleteButton(task);
    tdActions.appendChild(actionButton);

    tr.appendChild(tdTaskName);
    tr.appendChild(tdComplete);
    tr.appendChild(tdActions);

    return tr;
  }

  createDeleteButton(task) {
    const deleteButton = document.createElement("button");

    deleteButton.setAttribute("class", "btn btn-danger btn-sm");
    deleteButton.innerHTML = `🗑️`;
    deleteButton.addEventListener("click", () =>
      this.onRemoveTaskClicked(task)
    );

    return deleteButton;
  }

  onRemoveTaskClicked(task) {
    this.taskList = this.taskList.filter((x) => {
      return task.taskName !== x.taskName;
    });

    this.saveTasksToLocalStorage();
    this.renderTaskTable();
  }

  saveTasksToLocalStorage() {
    const json = JSON.stringify(this.taskList);
    localStorage.setItem("tasks", json);
  }

  loadTasksFromLocalStorage() {
    const json = localStorage.getItem("tasks");
    if (json) {
      const taskArr = JSON.parse(json);
      this.taskList = taskArr.map((x) => Task.fromJSON(x));
    }
  }
}

const ui = new UI();
