// selectors

document.querySelector("form").addEventListener("submit", handleSubmitForm)
document.querySelector("ul").addEventListener("click", handleClickDeleteOrCheck)
document.getElementById("clear")

// event handlers
function handleSubmitForm(e){
    // förklara
    e.preventDefault();
    let input = document.querySelector("input");
    // if input.value is not equal to empty
    if(input.value != "")
        addTodo(input.value);
    // empty the field after entering todotask
    input.value = "";
}

function handleClickDeleteOrCheck(e){
    // checks whats the name of the element we are clicking
    if (e.target.name == "checkButton")
        checkTodo(e);
    if (e.target.name == "deleteButton")
        deleteTodo(e)
}



// helpers
function addTodo(todo){
    let ul = document.querySelector("ul");
    // creats an "li" element
    let li = document.createElement("li");

    li.innerHTML = `
        <span class="todo-item">${todo}</span>
        <button name="checkButton"><i class="fas fa-check-square"></i></button>
        <button name="deleteButton"><i class="fas fa-trash"></i></button>
    `;
    // adds class to the li element
    li.classList.add("todo-list-item");
    ul.appendChild(li);
}

function checkTodo(e){
    let item = e.target.parentNode;
    if (item.style.textDecoration == "line-through")
        item.style.textDecoration = "none";
    else
        item.style.textDecoration = "line-through";
}

function deleteTodo(e){
    let item = e.target.parentNode;
    item.addEventListener("transitionend", function (){
        item.remove();
    })
    item.classList.add("todo-list-item-fall");
}