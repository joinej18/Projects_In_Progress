import React from "react";
import { TodoForm } from "./TodoForm";
import { useState } from "react";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className="TodoWrapper">
      <TodoForm />
    </div>
  );
};
