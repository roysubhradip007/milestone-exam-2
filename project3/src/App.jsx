import { useReducer } from 'react';
import './App.css';
import AddTodo from './component/AddTodo/AddTodo';
import TodoList from './component/TodoList/TodoList';
import TodoContext from './context/todoContext';
import TodoDispatchContext from './context/TodoDispatchContext';
import todoReducer from './component/reducers/todoReducer';


function App() {
  const [list, dispatch] = useReducer(todoReducer, [
    {
      id: 1, todoData: 'Learn useRef', status: 'pending'
    },
    {
      id: 2, todoData: 'Go to Gym', status: 'pending'
    },
    {
      id: 3, todoData: 'Build todo web app', status: 'pending'
    },
  ]);

  return (
    <TodoContext.Provider value={list}>
      <TodoDispatchContext.Provider value={dispatch}>
        <div className="wrapper">
          <AddTodo />
          <TodoList />
        </div>
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}

export default App
