import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoForm from "./components/TodoForm/TodoForm";
import Todo from "./components/Todo/Todo";
import axios from "axios";
function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8081/todos")
      .then((res) => {
        setTodos(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [setTodos]);

  const addTodo = (text) => {
    try {
      axios
        .post("http://localhost:8081/todos/create", {
          title: text.todo,
          description: text.description,
        })
        .then((res) => console.log(res.data));
      setTodos([...todos, text]);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <TodoForm addTodo={addTodo} />
        <div>
          {todos.length > 0 &&
            todos.map((todo, index) => (
              <Card>
                <Card.Body>
                  <Todo todo={todo} />
                </Card.Body>
              </Card>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;