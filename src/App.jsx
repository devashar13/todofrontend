import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoForm from "./components/TodoForm/TodoForm";
function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = text => {
    console.log(text);
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };
  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <TodoForm addTodo = {addTodo}/>
      </div>
    </div>
  );
}

export default App;
