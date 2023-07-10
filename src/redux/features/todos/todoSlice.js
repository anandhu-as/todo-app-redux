import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: { todoItem: [] },
  reducers: {
    addTodo: (state, action) => {
      state.todoItem.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todoItem = state.todoItem.filter(
        (item) => item.id !== action.payload
      );
    },
    clear: (state) => {
      state.todoItem = [];
    },
    toggle: (state, action) => {
      const todoItem = state.todoItem.find(
        (item) => item.id === action.payload
      );
      todoItem ? (todoItem.completed = !todoItem.completed) : "";
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, clear, toggle } = todoSlice.actions;
