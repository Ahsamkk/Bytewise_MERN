const input = document.getElementById('input');
const items = document.getElementById('todo-items');

let completedTodos = ["Revise Topics", "something"];
let pendingTodos = ["Go for a movie", "Buy Groceries"];


input.addEventListener('keydown', (event) => {
   if (event.key === 'Enter') {
      pendingTodos = [event.target.value, ...pendingTodos]
      event.target.value = '';
      renderTodos();
   }
})


let renderTodos = () => {
   let activeTab = document.querySelector('.todo-tabs a.active').getAttribute('data-tab');

   items.innerHTML = '';
   let todosToRender = [];

   if (activeTab === 'all') {
      todosToRender = [...pendingTodos, ...completedTodos];
   } else if (activeTab === 'pending') {
      todosToRender = pendingTodos;
   } else if (activeTab === 'completed') {
      todosToRender = completedTodos;
   }

   todosToRender.forEach((item) => {
      let isCompleted = completedTodos.includes(item);
      items.innerHTML +=
         `<div class="todo-item">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" ${isCompleted ? 'checked' : ''} disabled>
                <p>${item}</p>
                <div class="dropdown">
                    <a class="btn dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="fa-solid fa-ellipsis"></i>
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#" onclick="markCompleted(event)">Mark Completed</a></li>
                        <li><a class="dropdown-item" href="#" onclick="deleteTodo(event)">Delete Todo</a></li>
                    </ul>
                </div>
            </div>
        </div>`;
   });
}

renderTodos();

let toggleButton = (event) => {
   event.preventDefault();
   let target = event.target;

   let siblings = target.parentElement.children;
   for (let sibling of siblings) {
      sibling.classList.remove("active");
   }

   target.classList.add('active');
   renderTodos();
}

let clearTodo = () => {
   completedTodos = [];
   pendingTodos = [];
   renderTodos();
}


let deleteTodo = (event) => {
   let check = event.target.parentElement.parentElement.parentElement.parentElement.firstElementChild;
   if(check.checked){
      completedTodos = completedTodos.filter(item => item !== check.nextElementSibling.innerText);
      
   }else{
      pendingTodos = pendingTodos.filter(item => item !== check.nextElementSibling.innerText);
   }
   renderTodos();
}

let markCompleted = (event) => {
   let check = event.target.parentElement.parentElement.parentElement.parentElement.firstElementChild;
   check.checked = true;
   pendingTodos = pendingTodos.filter(item => item !== check.nextElementSibling.innerText);
   completedTodos = [check.nextElementSibling.innerText, ...completedTodos]
   renderTodos();
}



