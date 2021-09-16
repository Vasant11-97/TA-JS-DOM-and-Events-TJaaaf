function main(){
    let inputText = document.querySelector('#text');
let root = document.querySelector('ul');

let allTodos = [];

function handleInput(event){
    let value = event.target.value
    if(event.keyCode === 13 && event.target.value !== ""){
        let todo = {
            name : value,
            isDone : false
        };
        allTodos.push(todo);
        event.target.value = "";

        createUI(allTodos,root);
    }
}

function handleDelete(event) {
    let id = event.target.dataset.id;
    allTodos.splice(id, 1);
     
    createUI(allTodos,root);
}

function handleToggle(event){
    let id = event.target.dataset.id;
    allTodos[id].isDone = !allTodos[id].isDone;

    createUI(allTodos, root);
}

function activeTodo(event){
    createUI(allTodos, root);
}

function completedTodo(event){
    createUI(allTodos, root);
}


function createUI(data, rootElm){
    rootElm.innerHTML = "";
    data.forEach((todo, index) => {
        let li = document.createElement('li');
        li.style.display = "flex";
        li.style.alignItems = "center";
        let input = document.createElement('input');
        input.type = "checkbox";
        input.setAttribute("data-id", index);
        input.addEventListener('input', handleToggle)
        input.checked = todo.isDone;
        let p = document.createElement('p');
        p.innerText = todo.name;
        if(input.checked === true){
            p.style.textDecoration = "line-through";
        }
        let span = document.createElement('span');
        span.innerText = "❌";
        span.setAttribute("data-id", index);

        span.addEventListener('click', handleDelete);

        let active = document.querySelector('active');
        active.addEventListener('click', activeTodo);
        let completed = document.querySelector('completed');
        completed.addEventListener('click', completedTodo)

        li.append(input, p, span);
        rootElm.append(li);
    });

    
}

createUI(allTodos, root);

inputText.addEventListener("keyup", handleInput);
}

main();