import { useContext, useState } from 'react';
import './addTodo.css'
import TodoDispatchContext from '../../context/TodoDispatchContext';

function AddTodo() {
    const [textData, setTextData] = useState('');
    const dispatch = useContext(TodoDispatchContext);

    return (
        <div className="addWrapper">
            <input placeholder='Enter Your Todo...' onChange={(e) => setTextData(e.target.value)}/>
            <button onClick={() => dispatch({type: 'add_todo', payload: {todoData: textData}})}>Add</button>
        </div>
    )
}

export default AddTodo;