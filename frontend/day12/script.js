var todos = [
    "palying for 2hrs",
    "learning new skill",
    "reading new books",
    "team meeting"
]
var container = document.querySelector('.container');
var ul = document.createElement("ul");

  
for (let i = 0; i < todos.length; i++){
    var li = document.createElement("li");
    var todo = document.createElement("span");
    var button = document.createElement("span");
    button.className = "remove";
    button.innerText = "Remove";
    todo.className = "todo";
    todo.innerText = todos[i];
    li.appendChild(todo);
    li.appendChild(button);
    ul.appendChild(li);
}
container.appendChild(ul);

var list = document.querySelector('.container ul');

//removing todos
list.addEventListener('click', (e) => {
    var ele=e.target.parentElement.querySelector('.todo');
    console.log(ele.innerText);
    // console.log(e.target.parentElement);
    list.removeChild(e.target.parentElement);
    todos=todos.filter((value) => {
        return value != ele.innerText;
    })
    console.log(todos);
})


// adding todo
const addTodo= document.forms['add-todo'];
addTodo.addEventListener('submit', (e) => {
    // console.log("heloo");
    e.preventDefault();
    console.log(e.target.parentElement);
    //extracting the value from the input element
    // console.log();
    var item = addTodo.querySelector('input[type=text]');
    console.log(item.value);
    var li = document.createElement('li');
    li.innerHTML = `<span class="todo">${item.value}</span>
    <span class="remove">Remove</span>
    `;
    list.appendChild(li);
    todos.push(item.value);
    console.log(todos);
    item.value = null;
})