document.addEventListener("DOMContentLoaded", loadTodos);

function loadTodos() {
  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  const todoList = document.getElementById("todo-list");
  todoList.innerHTML = "";

  todos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo.text;

    const deleteIcon = document.createElement("i");
    deleteIcon.className = "delete-icon";
    deleteIcon.innerHTML = "&#128465;";
    deleteIcon.style.cursor = "pointer";
    deleteIcon.onclick = () => deleteTodo(todo.text);

    li.appendChild(deleteIcon);
    todoList.appendChild(li);
  });
}

function addTodo() {
  const newTodoInput = document.getElementById("new-todo");
  const newTodoText = newTodoInput.value.trim();

  if (newTodoText === "") {
    alert("Please enter a to-do item.");
    return;
  }

  const todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos.push({ text: newTodoText });

  localStorage.setItem("todos", JSON.stringify(todos));
  newTodoInput.value = "";

  loadTodos();
}

function deleteTodo(todoText) {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];
  todos = todos.filter((todo) => todo.text !== todoText);

  localStorage.setItem("todos", JSON.stringify(todos));

  loadTodos();
}

function deleteAllTodos() {
  localStorage.removeItem("todos");
  loadTodos();
}
