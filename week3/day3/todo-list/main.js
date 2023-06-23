console.log('Running');
// grab form to add event listener 
let form = document.querySelector('form');
form.addEventListener('submit', submitTodo)
// grab the input to get the value of it
let input = document.querySelector('input')
// grab the todos div
let todos = document.querySelector('.todos')

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
    // add the todoDiv to the todos div
    todos.appendChild(todoDiv)
}

function toggleTodo(element){
    let todoTextClassName = element.currentTarget.uuid;
    let todoText = document.querySelector(`.${todoTextClassName}`)
    if(todoText.classList.contains('complete')){
        todoText.classList.remove('complete')
    }
    else{
        todoText.classList.add('complete')
    }
    // console.log(todoText);

}