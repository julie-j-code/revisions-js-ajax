window.addEventListener('load', () => {

    // on charge les todos depuis local storage, ce qui n'était pas prévu initialement
    todos = JSON.parse(localStorage.getItem('todos')) || [];

    const addbutton = document.querySelector("#add");

    addbutton.addEventListener("click", addToList);

    function addToList(event) {
        event.preventDefault();
        const todo = {
            content: todoinput.value,
            category: categories.value,
            createdAt: new Date().getTime()
        }

        // on rajoute l'enregistrement dans local storage pour l'exercice
        todos.push(todo);
        localStorage.setItem('todos', JSON.stringify(todos));
        displayTodos();
    }

    displayTodos();

    function displayTodos() {
        const todolist = document.querySelector("#todolist");
        todolist.innerHTML = "";
        todos.forEach(todo => {
            let todoItem = document.createElement("p")
            todoItem.classList.add('todo-item');
            todoItem.innerHTML = `${todo.content} - Category : ${todo.category}`;
            const btnDelete = document.createElement('button');
            btnDelete.addEventListener("click", (event) => {
                myElementToRemove = event.target.parentElement;
                myElementToRemove.remove();
                todos = todos.filter(t => t != todo);
                localStorage.setItem('todos', JSON.stringify(todos));
            });
            btnDelete.classList.add("delete");
            btnDelete.textContent="x";
            todoItem.appendChild(btnDelete);
            todolist.appendChild(todoItem);
            todoinput.value = "";

        });

    }
})




