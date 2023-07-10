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
    clear:(state)=>{
        state.todoItem=[]
    }
  },
});
export default todoSlice.reducer;
export const { addTodo, removeTodo ,clear} = todoSlice.actions;
