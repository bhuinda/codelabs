const todoList = document.querySelector('.list-container');
const todoForm = document.querySelector('.add-form');
const todoInput = todoForm.querySelector('input[type=text]');
const todoClear = document.querySelector('.list-clear');
const todoPending = document.querySelector('.list-pending');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

fillTodoList(todos);
updatePending(todos);

function createTodo(e) {
    e.preventDefault();
    if (todoInput.value.trim().length === 0) {
        todoInput.placeholder = 'Invalid input!';
        return;
    }

    const title = todoInput.value;
    const todo = {
        title: title,
        complete: false
    };
    todos.push(todo);
    
    fillTodoList(todos);
    storeTodos(todos);
    updatePending(todos);

    todoForm.reset();
    todoInput.placeholder = 'Enter new task...'
}

function modifyTodo(e) {
    if (e.target.matches('.remove-icon')) {
        const index = e.target.parentNode.dataset.id;
        todos.splice(index, 1);
        fillTodoList(todos);
        storeTodos(todos);
    }
    if (e.target.matches('.complete-icon')) {
        if (e.target.parentNode.classList.contains('completed')) {
            e.target.parentNode.classList.remove('completed');
            updatePending();
            return;
        }
        e.target.parentNode.classList.add('completed');
        updatePending();
    }
    else return;
}

function removeAllTodos(e) {
    if (!e.target.matches('.list-clear')) return;

    localStorage.removeItem('todos');
    todos = [];
    fillTodoList(todos);
}

function fillTodoList(todos = []) {
    const todoHtml = todos.map((todo, i) => {
        return `
            <div class="list-item" data-id="${i}">
                <button class="complete-icon"><img src="/assets/images/checkmark.png"></button>
                <div class="title">${todo.title}</div>
                <button class="remove-icon"><img src="/assets/images/trash.png"></button>
            </div>
        `;
    }).join('');
    todoList.innerHTML = todoHtml;

    updatePending();
}

function storeTodos(todos = []) {
    localStorage.setItem('todos', JSON.stringify(todos));
}

function updatePending() {
    const todosCompleted = todoList.querySelectorAll('.completed');
    
    const pendingHtml = `
        <span>You have ${todos.length - todosCompleted.length} task(s) left to do.</span>
    `
    todoPending.innerHTML = pendingHtml;
}

todoForm.addEventListener('submit', createTodo);
todoList.addEventListener('click', modifyTodo);
todoClear.addEventListener('click', removeAllTodos);