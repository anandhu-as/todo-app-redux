import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  clear,
  clearCompleted,
} from "../../redux/features/todos/todoSlice";
import TodoItem from "./TodoItem";
const TodoList = () => {
  const dispatch = useDispatch();
  const { todoItem } = useSelector((state) => state.todo);
  const [todo, setTodo] = useState("");
  const completedTodo = todoItem.filter((item) => item.completed);
  const remainingTodo = todoItem.filter((item) => !item.completed);
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
      <button
        onClick={() => dispatch(clearCompleted())}
        className=" bg-blue-200 hover:bg-red-600 text-black font-bold py-2 px-4 rounded ml-1"
      >
        ClearCompleted
      </button>
      <button className="ml-3  border-solid border-2 border-sky-200 py-2 px-3">
        completed:{completedTodo.length}
      </button>
      <button className="ml-3 border-solid border-2 border-sky-100 py-2 px-3 ">
        remaining:{remainingTodo.length}
      </button>
      <TodoItem todoItem={todoItem} />
    </section>
  );
};

export default TodoList;
