import Button from "../UI/Button";
import {RiRefreshLine, RiDeleteBin2Line} from "react-icons/ri";
import styles from './TodosActions.module.css'

function TodosActions({resetTodos, deleteCompletedTodos, completedTodosExist}) {
    return (
        <div className={styles.todosActionsContainer}>
            <Button title="Reset todos" onClick={resetTodos}><RiRefreshLine /></Button>
            <Button title="Clear completed todos" onClick={deleteCompletedTodos} disabled={!completedTodosExist}><RiDeleteBin2Line /></Button>
        </div>
    )
}

export default TodosActions