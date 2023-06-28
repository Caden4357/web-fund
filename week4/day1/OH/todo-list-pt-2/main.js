console.log('Running');
// grab form to add event listener 
let form = document.querySelector('form');
form.addEventListener('submit', submitTodo)
// grab the input to get the value of it
let input = document.querySelector('input')
// grab the todos div
let todos = document.querySelector('.todos')
let totalTodos = document.querySelector('#total-todos');
let completedTodos = document.querySelector('#completed-todos');


function submitTodo(event){
    // console.log(event);
    event.preventDefault();
    let newTodo = {
        id: Date.now(),
        task:input.value,
        isComplete:false
    }
    // console.log(newTodo);
    // Create a new div for each todo object 
    let todoDiv = document.createElement('div')
    todoDiv.classList.add(`todo-div-${newTodo.id}`)

    // create a p tag for the task 
    let todoText = document.createElement('p')
    todoText.innerText = newTodo.task
    todoText.classList.add(`todo-text-${newTodo.id}`)
    todoDiv.appendChild(todoText)
    // create input type checkbox for the isComplete
    let todoComplete = document.createElement('input')
    todoComplete.type = 'checkbox'
    todoComplete.addEventListener('click', toggleTodo)
    todoComplete.uuid = `todo-text-${newTodo.id}`
    todoDiv.appendChild(todoComplete)

    // creating delete button for each todo
    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.addEventListener('click', deleteTodo)
    deleteButton.uuid = `todo-div-${newTodo.id}`
    deleteButton.textClassName = `todo-text-${newTodo.id}`
    todoDiv.appendChild(deleteButton);


    // add the todoDiv to the todos div
    todos.appendChild(todoDiv)



    input.value = ''
    totalTodos.innerText++
}
// Check if todo is completed or not when deleting 
// if its completed then we need to decrement the completedTodos innertext
// if its not completed do nothing to completedTodos innertext
function deleteTodo(element){
    let todoDivClassName = element.currentTarget.uuid;
    let textClassName = element.currentTarget.textClassName;
    let todoDiv = document.querySelector(`.${todoDivClassName}`)
    let todoText = document.querySelector(`.${textClassName}`)
    if(todoText.classList.contains('complete')){
        completedTodos.innerText--
        todoDiv.remove();
        totalTodos.innerText--
    }
    else{
        todoDiv.remove();
        totalTodos.innerText--
    }
}
// each time the todo checkbox is clicked we need to check if we are completing or not completing the todo 
// depending on the above we need to increment or decrement the completed todos inner text
function toggleTodo(element){
    let todoTextClassName = element.currentTarget.uuid;
    let todoText = document.querySelector(`.${todoTextClassName}`)
    if(todoText.classList.contains('complete')){
        todoText.classList.remove('complete')
        completedTodos.innerText--
    }
    else{
        todoText.classList.add('complete')
        completedTodos.innerText++
    }
}