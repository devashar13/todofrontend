import React from "react";
import "./Todo.css";
function Todo({ todo }) {
  return (
    <div className="todo">
      <span>{todo.title}</span>
      <div className="text-justify">
        <span style={{ color: "lightgrey", fontSize: 14 }}>
          {todo.description}
        </span>
      </div>
    </div>
  );
}

export default Todo;
