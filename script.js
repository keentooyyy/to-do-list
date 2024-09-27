function addTodo() {
    const getInput = document.getElementById('todo').value;
    createElements(getInput);
}

function createElements(input) {
    const todoItemsDiv = document.createElement('div');
    todoItemsDiv.setAttribute('class', 'grid place-self-center w-11/12 grid-cols-2 content-center items-center my-5');
    todoItemsDiv.setAttribute('id', 'todo-items');


    const pTag = document.createElement('p');
    pTag.textContent = input;
    pTag.setAttribute('class', 'text-xl');

    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.setAttribute('class', 'rounded-md bg-red-500 px-5 py-3 capitalize text-white w-fit text-center place-self-end');
    removeButton.setAttribute('onclick', 'removeTodo(this)');

    todoItemsDiv.appendChild(pTag);
    todoItemsDiv.appendChild(removeButton);

    document.getElementById('todo-body').appendChild(todoItemsDiv);


}

function removeTodo(element) {
    const removeButton = element.parentElement
    removeButton.remove();
}
