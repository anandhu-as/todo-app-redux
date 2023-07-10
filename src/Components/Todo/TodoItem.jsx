import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggle } from "../../redux/features/todos/todoSlice";

const TodoItem = ({ todoItem }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo-box">
      {todoItem.map((item) => {
        return (
          <div className="todo-item" key={item.id}>
            <h4 className="flex justify-between items-center">
              <span className={item.completed && "line-through"}>
                {item.value}
              </span>
              <div className="flex "> 
                <input  
                  type="checkbox"
                  className="mr-2"
                  onChange={() => dispatch(toggle(item.id))}
                />
                <button
                  onClick={() => dispatch(removeTodo(item.id))}
                  className="p-2 rounded-full bg-white-400 text-white hover:bg-white-600"
                >
                  ❌
                </button>
              </div>
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default TodoItem;
