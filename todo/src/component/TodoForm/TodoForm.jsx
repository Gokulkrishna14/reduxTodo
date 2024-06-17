import React, { useState } from 'react'
import styles from "./TodoForm.module.css";
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/features/todo/todoSlice';

export default function TodoForm() {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();

    const add = (e) => {
        e.preventDefault();
        if(!todo) return
        dispatch(addTodo({todo, completed: false}))
        setTodo("");
    }


  return (
    <div className={styles.container}>
        <form onSubmit={add}>
            <input type="text" value={todo} className={styles.input} placeholder='Add a Todo...' onChange={(e) => setTodo(e.target.value)} />
            <button className={styles.button} type="submit">Add</button>
        </form>
    </div>
  )
}
