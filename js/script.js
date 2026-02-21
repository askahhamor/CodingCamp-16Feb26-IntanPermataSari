let todos = []
function addTodo() { const todoInput = document.getElementById("todoInput");
    const todoDate = document.getElementById("todoDate");

    const text = todoInput.value;
    const date = todoDate.value;

    if (text === "" || date === "") {
        alert("Add your To-Dos please..! :<");
        return;
    }

    const newTodo = {
        text: text,
        date: date
    };

    todos.push(newTodo);

    todoInput.value = "";
    todoDate.value = "";

    displayTodos();
}

function displayTodos() {
    const todoList = document.getElementById("to-do-list");
    todoList.innerHTML = "";

    todos.forEach(function(todo) {
        const li = document.createElement("li");
        li.textContent = todo.text + " - " + todo.date;
        todoList.appendChild(li);
    });
}

function deleteTodos() {
    todos = [];
    displayTodos();
}

function filterTodos() {

    const filtered = todos.filter(function(todo) {
        return todo.date !== "";
    });

    const todoList = document.getElementById("to-do-list");
    todoList.innerHTML = "";

    if (filtered.length === 0) {
        todoList.innerHTML = "<li>No filtered results</li>";
        return;
    }

    filtered.forEach(function(todo) {
        const li = document.createElement("li");
        li.textContent = todo.text + " - " + todo.date;
        todoList.appendChild(li);
    });
}