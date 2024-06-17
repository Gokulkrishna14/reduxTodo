import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
  ],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action) => {
        state.todos=action.payload;
    },
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.todo,
        completed: action.payload.completed
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map(todo =>
        todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
      );
    },
    completedTodo: (state, action) => {
      state.todos = state.todos.map(todo =>
        todo.id === action.payload ? { ...todo, completed: true } : todo
      );
    },
  },
});

export const { addTodo, removeTodo, editTodo, completedTodo , setTodos} = todoSlice.actions;

export default todoSlice.reducer;