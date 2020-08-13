//alert('Funcionou!');


var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');


/*
var todos = [
    'Fazer café',
    'Estudar JavaScript',
    'Acessar comunidade da Rocketseat'
];
*/

todos = JSON.parse(localStorage.getItem('list_todos')) || [];


// renderizar todos em tela
function renderTodos() {
    listElement.innerHTML = '';

    for (todo of todos) {
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

        var todoRemove = document.createElement('a'); // linkElement
        var removeText = document.createTextNode('Excluir'); // linkText
        todoRemove.setAttribute('href', '#');
        //todoRemove.setAttribute('style', 'margin-left: 6px;');
        todoRemove.classList.add('todo-remove')
        todoRemove.appendChild(removeText)

        var pos = todos.indexOf(todo)
        todoRemove.setAttribute('onclick', 'deleteTodo(' + pos +')');

        todoElement.appendChild(todoText);
        todoElement.appendChild(todoRemove);
        listElement.appendChild(todoElement);
    }
}


renderTodos();


function addTodo() {
    var todoText = inputElement.value;

    if (todoText != '') {
        todos.push(todoText);
        inputElement.value = '';
        renderTodos();
    }
}


buttonElement.onclick = addTodo;



function deleteTodo(pos) {
    todos.splice(pos, 1);
    renderTodos();
    saveToStorage();
}

function saveToStorage() {
    localStorage.setItem('list_todos', JSON.stringify(todos));
}