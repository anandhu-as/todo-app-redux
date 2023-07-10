import React from "react";
import TodoList from "./Components/Todo/TodoList";
import NavBar from "./Components/NavBar/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <TodoList />
    </div>
  );
};

export default App;
