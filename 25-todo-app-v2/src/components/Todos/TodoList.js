import Todo from "./Todo";
import styles from './TodoList.module.css'
function TodoList({todos, deleteTodo}) {
    return(
        <div className={styles.todoListContainer}>
            {todos.length
                ? todos.map((todo) => <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />)
                : <h2>Todo list is empty</h2>}
        </div>
    )
}

export default TodoList