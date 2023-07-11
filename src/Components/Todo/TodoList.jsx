import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, clear } from "../../redux/features/todos/todoSlice";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const dispatch = useDispatch();
  const { todoItem } = useSelector((state) => state.todo);
  const [todo, setTodo] = useState("");
  const completedTodo=todoItem.filter((item)=>item.completed)
  const handleAdd = () => {
    if (todo !== "") {
      const newTodo = { id: Date.now(), value: todo, completed: false };
      dispatch(addTodo(newTodo));
    }
    setTodo("");
  };
  return (
    <section>
      <input
        type="text"
        className="border-2 ml-96 mt-10 p-2 rounded-md content-center  "
        onChange={(event) => setTodo(event.target.value)}
        placeholder="Enter a task"
        value={todo}
      />
      <button
        className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded ml-1"
        onClick={handleAdd}
      >
        Add
      </button>
      <button
        onClick={() => dispatch(clear())}
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-1"
      >
        Clear
      </button>
      <h1 className="pl-8">completedTodo:{completedTodo.length}</h1>
      <TodoItem todoItem={todoItem} />
    </section>
  );
};

export default TodoList;
