const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");
let toDos = [];
const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem("todos",JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "✖"
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

}


function handleToDoSubmit(e) {
    e.preventDefault(); //submit의 기본동작 새로고침 방지
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit); 
//submit을 하면 handleToDoSubmit이라는 함수를 실행

// function sayHello(item){
//     console.log("this is the turn of", item);
// }

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos; //toDos array값 업데이트
    parsedToDos.forEach(paintToDo);
}