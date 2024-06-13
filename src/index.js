// Create a Projects array to hold all projects
var Projects = [];

function Project(name) {
  this.name = name;
  this.todos = [];
  Projects.push(this); // Add the new project to the Projects array
}

// Create a defualt project
var defaultProject = new Project("Default");

// Modify the createToDo function to accept a project parameter

function CreateToDo(project, title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  project.todos.push(this); // Add the new ToDo to the specified project
}

// Event listener for the "New Project" button
document
  .getElementById("newProjectButton")
  .addEventListener("click", function () {
    // Create a new project
    var newProject = new Project("Sample");

    // Get the project dropdown
    var projectDropdown = document.getElementById("projectDropdown");

    // Create a new option for the new project
    var option = document.createElement("option");
    option.value = newProject.name;
    option.textContent = newProject.name;

    // Add the new option to the project dropdown
    projectDropdown.appendChild(option);
  });

// Modify the event listener for the "New ToDo" button
document.getElementById("newTodoButton").addEventListener("click", function () {
  var title = "Sample Title";
  var description = "Sample Description";
  var dueDate = new Date();
  dueDate.setDate(dueDate.getDate() + 1);
  dueDate = dueDate.toISOString().split("T")[0];
  var priority = "Medium";

  // Get the selected project from a dropdown (not shown)
  var selectedProject = document.getElementById("projectDropdown").value;

  // Find the project in the Projects array
  var project = Projects.find(function (project) {
    return project.name === selectedProject;
  });

  // Check if the project exists
  if (!project) {
    console.error("Project not found: " + selectedProject);
    return;
  }

  // Create the new ToDo and add it to the selected project
  var newTodo = new CreateToDo(project, title, description, dueDate, priority);

  // Get the table body where new rows will be inserted
  var tbody = document.getElementsByTagName("tbody")[0];

  // Clear the table body
  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  // Add rows for each Todo in the current project
  project.todos.forEach(function (todo) {
    // Create a new row
    var newRow = tbody.insertRow();

    // Insert cells, set their text content, and make them editable

    var titleCell = newRow.insertCell(0);
    titleCell.textContent = todo.title;
    titleCell.contentEditable = "true";

    var descriptionCell = newRow.insertCell(1);
    descriptionCell.textContent = todo.description;
    descriptionCell.contentEditable = "true";

    var dueDateCell = newRow.insertCell(2);
    dueDateCell.textContent = todo.dueDate;
    dueDateCell.contentEditable = "true";

    var priorityCell = newRow.insertCell(3);
    priorityCell.textContent = todo.priority;
    priorityCell.contentEditable = "true";
  });
});
