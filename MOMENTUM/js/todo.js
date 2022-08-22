const toDoForm = document.getElementById("todo-form");
const toDoList = document.getElementById("todo-list");
const toDoInput = toDoForm.querySelector("input");

function handleToDoSubmit(e) {
    e.preventDefault(); //submit의 기본동작 새로고침 방지
    const newTodo = toDoInput.value;
    toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit); //submit을 하면 handleToDoSubmit이라는 함수를 실행