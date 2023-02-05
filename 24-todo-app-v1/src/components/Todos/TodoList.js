import Todo from "./Todo";
function TodoList({todos}) {
    return todos.length ? todos.map((todo, id) => <Todo key={id} todo={todo}/>) : <h1>TodoList is empty</h1>
}

export default TodoList