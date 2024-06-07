function createToDo(title, description, dueDate, priority) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
}

document.getElementById("newTodoButton").addEventListener("click", function () {
  var title = "Sample Title";
  var description = "Sample Description";
  var dueDate = "2022-12-31";
  var priority = "High";
  console.log(title);
  var newTodo = new createToDo(title, description, dueDate, priority);

  // Get the table body where new rows will be inserted
  var tbody = document.getElementsByTagName("tbody")[0];

  // Create a new row
  var newRow = tbody.insertRow();

  // Insert cells, set their text content, and make them editable

  var titleCell = newRow.insertCell(0);
  titleCell.textContent = newTodo.title;
  titleCell.contentEditable = "true";

  var descriptionCell = newRow.insertCell(1);
  descriptionCell.textContent = newTodo.description;
  descriptionCell.contentEditable = "true";

  var dueDateCell = newRow.insertCell(2);
  dueDateCell.textContent = newTodo.dueDate;
  dueDateCell.contentEditable = "true";

  var priorityCell = newRow.insertCell(3);
  priorityCell.textContent = newTodo.priority;
  priorityCell.contentEditable = "true";
});
