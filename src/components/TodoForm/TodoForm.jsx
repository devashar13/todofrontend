import React from "react";
import { Button, Form } from "react-bootstrap";

function TodoForm({ addTodo }) {
  const [todoValue, setTodoValue] = React.useState("");
  const [todoDescription, setTodoDescription] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoValue & !todoValue) return;
    addTodo({ todo: todoValue, description: todoDescription });
    setTodoValue("");
    setTodoDescription("");
  };

  return (
    <Form className= "todo" onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>Add Todo</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={todoValue}
          onChange={(e) => setTodoValue(e.target.value)}
          placeholder="Add new todo"
        />
        {/* todo description */}
        <Form.Control
          type="text"
          className="input mt-2"
          value={todoDescription}
          onChange={(e) => setTodoDescription(e.target.value)}
          placeholder="Add description"
        />
      </Form.Group>
      <Button variant="primary mt-3 mb-3" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default TodoForm;
