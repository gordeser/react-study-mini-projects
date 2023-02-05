import Todo from "./Todo";
import styles from './TodoList.module.css'
function TodoList({todos}) {
    return(
        <div className={styles.todoListContainer}>
            {todos.length ? todos.map((todo, id) => <Todo key={id} todo={todo}/>) : <h2>Todo list is empty</h2>}
        </div>
    )
}

export default TodoList