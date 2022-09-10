const todoinput = document.querySelector("#todoinput");
const addbutton = document.querySelector("#add");
const todolist = document.querySelector("#todolist");

let newItem = "";
let btnDelete;

// todoinput.addEventListener("onchange", getTodo(event));
addbutton.addEventListener("click", addToList);

function addToList(event) {
    event.preventDefault();
    valueInput = todoinput.value;
    console.log(valueInput)
    // dès qu'on a récupéré la valeur, on crée notre paragraphe
    let todoItem = document.createElement("p")
    todoItem.classList.add('todo-item');
    todoItem.innerHTML = `${valueInput} <button class="delete" onclick="deleteItem(event)"> x </button>`;
    // puis on l'accroche à la liste existante
    todolist.appendChild(todoItem);
    todoinput.value = ""
}

function deleteItem(event) {
    myElementToRemove = event.target.parentElement;
    console.log(myElementToRemove);
    myElementToRemove.remove();
}




