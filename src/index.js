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

  // Insert cells and set their text content
  newRow.insertCell(0).textContent = newTodo.title;
  newRow.insertCell(1).textContent = newTodo.description;
  newRow.insertCell(2).textContent = newTodo.dueDate;
  newRow.insertCell(3).textContent = newTodo.priority;
});
