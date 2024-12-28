import { useContext, useState } from "react";
import TodoContext from "../../context/todoContext";
import Todo from "../Todo/Todo";
import './todoList.css';


function TodoList() {
    const list = useContext(TodoContext);

    return(
        <div className="todoListContainer">
            {list.length > 0 && list.map(todo =>
                <Todo key={todo.id} newTodo={todo} />
            )}
        </div>
    )
}

export default TodoList;