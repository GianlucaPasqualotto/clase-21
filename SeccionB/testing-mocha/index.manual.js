import { TodoClass } from "./todosClass.js";

const todos = new TodoClass();

console.log(todos.list());

todos.add("Primera Tarea");
todos.add("Segunda Tarea");

console.log(todos.list());

todos.complete("Segunda Tarea");

console.log(todos.list());