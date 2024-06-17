import React, { useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from "./TodoItem.module.css";
import SaveIcon from '@mui/icons-material/Save';
import { editTodo, removeTodo, completedTodo } from '../../store/features/todo/todoSlice';
import { useDispatch } from 'react-redux';

export default function TodoItem({todo}) {
  const [isEdititable, setIsEdititable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.text);
  const dispatch = useDispatch();

  const edit = () => {
    dispatch(editTodo(todo.id, {...todo, todo: todoMsg}));
  }

  return (
    <div className={styles.containerItem}>
      <div className={styles.checkboxContainer}>
        <input 
        type="checkbox" 
        className={styles.checkbox}
        checked={todo.completed}
        onChange={() => dispatch(completedTodo(todo.id))}
        />
      </div>
      <input 
      type="text" 
      value={todoMsg} 
      className={`${styles.input} ${isEdititable ? styles.noneditField : styles.editField} ${todo.completed && styles.strikeout}`}
      readOnly={!isEdititable}
      onChange={(e) => setTodoMsg(e.target.value)}
      />
      <button 
      className={`${styles.button} ${styles.edit} ${todo.completed ? styles.disabled : styles.enabled}`
      }
      onClick={() => {
        if(todo.completed) return;
        if(isEdititable){
          edit(todo.id)
        }setIsEdititable((prev) => !prev)
      }}
      disabled={todo.completed}
      >
        {isEdititable ? <SaveIcon /> : <EditIcon />}
      </button>
      <button 
      className={`${styles.button} ${styles.delete}`}
      onClick={() => dispatch(removeTodo(todo.id))}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}
