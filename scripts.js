const todoInput = document.querySelector("#todo-input");

const todos = [];

todoInput.addEventListener("keyup", function(e) {
    if(e.key === "Enter" || e.keyCode === 13){
        todos.push({value: e.target.value, checked: false});
        newTodo(e.target.value);
        todoInput.value = "";
    }
})

function changeTheme() {
    document.body.classList.toggle("light");
}