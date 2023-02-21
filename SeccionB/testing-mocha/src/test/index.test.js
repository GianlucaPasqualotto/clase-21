import { TodoClass } from "../../todosClass.js";
import assert from "assert";

// Crear las pruebas
describe("Test de la clase TodoClass y sus métodos",()=>{
    it("Al crear la instancia de la clase, se debe crear una lista de tareas vacía",()=>{
        const todos = new TodoClass();
        assert.strictEqual(todos.list().length, 0)
    });

    it("Al agregar una tarea, el tamaño del arreglo debería incrementar",()=>{
        const todos = new TodoClass();
        todos.add("Nueva tarea");
        assert.strictEqual(todos.list().length, 1)
        assert.deepStrictEqual(todos.list(),[
            { title: 'Nueva tarea', completed: false }
        ])
    });
});