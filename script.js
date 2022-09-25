const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
  }
  
  const list = document.getElementById('todo-list')
  const itemCountSpan = document.getElementById('item-count')
  const uncheckedCountSpan = document.getElementById('unchecked-count')
  
  let todos = [];
  let id = 0;
  
  function newTodo() {
  
    let text = prompt('enter a new task')
    const todo = { id: id++, text, checked: Math.random()<0.5 ? false : true};
    todos.push(todo);
    console.log('todos', todos);
    render(); 
  }
  
  function render() {
    list.innerHTML="";
    todos.map(todo => renderTodo(todo)).forEach(todo => list.append(todo))
    itemCountSpan.textContent = todos.length;
    uncheckedCountSpan.textContent = todos.filter(todo=>!todo.checked).length;
  }
  
  function renderTodo(todo) {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox" ${todo.checked?"checked":""}>
      <span>${todo.text}</span>
      <button onClick="removeTodo(${todo.id})">delete</button>
    `
    return li;
  }
  function removeTodo(id)
  {
    console.log('from removeTodo',id);
   todos = todos.filter(todo=>todo.id!==id);
   render();
  }