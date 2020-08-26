import { crearTodoHtml } from './js/componentes.js';
// import { Todo } from './clases/todo.class';
// import { TodoList } from './clases/todo-list.class.js';
import {Todo,TodoList} from './clases';

import './styles.css';



export const todoList = new TodoList();

todoList.todos.forEach( todo=> crearTodoHtml(todo));

// const tarea = new Todo('Hacer la compra en el Mercadona');

// todoList.nuevoTodo(tarea);

 console.log(todoList);

// crearTodoHtml( tarea );

