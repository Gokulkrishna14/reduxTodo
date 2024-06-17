import { useEffect } from 'react';
import './App.css';
import TodoForm from './component/TodoForm/TodoForm';
import TodoItem from "./component/TodoItem/TodoItem";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setTodos } from './store/features/todo/todoSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("Todos"));
    if (savedTodos && savedTodos.length > 0) {
      dispatch(setTodos(savedTodos));
    }
  }, []);

  const todos = useSelector(state => state.todos.todos);

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  },[todos]);
  

  return (
    <div className='container'>
        <h1>Manage Your Todos</h1>
        <TodoForm />
        {
          todos && todos.map(todo => (
            <div className='item' key={todo.id}>
              <TodoItem todo={todo} />
            </div>
          ))
        }
        
      </div>
  );
}

export default App;
