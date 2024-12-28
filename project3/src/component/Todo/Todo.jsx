import { useContext } from 'react';
import './todo.css'
import TodoDispatchContext from '../../context/TodoDispatchContext';

function Todo({newTodo}) {
    const dispatch = useContext(TodoDispatchContext);

    return (
        <div className="todoWrapper">
            <h3>{newTodo.id}. {newTodo.todoData}</h3>
            <p>Status: {newTodo.status}</p>
            <button onClick={() => dispatch({type: 'edit_status', payload: {todo: newTodo}})}>Update Status</button>
            <button onClick={() => dispatch({type: 'remove_todo', payload: {todo: newTodo}})}>Remove</button>
        </div>
    )
}

export default Todo;