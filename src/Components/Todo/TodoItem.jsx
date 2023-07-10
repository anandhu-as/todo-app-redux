import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../redux/features/todos/todoSlice";

const TodoItem = ({ todoItem }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo-box">
      {todoItem.map((item) => {
        return (
          <div className="todo-item" key={item.id}>
            <h4 className="flex justify-between items-center">
              <span>{item.value}</span>
              <button
                onClick={() => dispatch(removeTodo(item.id))}
                className="ml-2 p-2 rounded-full bg-white-400 text-white hover:bg-white-600"
              >
                ❌
              </button>
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default TodoItem;
