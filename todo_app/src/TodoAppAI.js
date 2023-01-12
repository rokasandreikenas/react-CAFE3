import React, { useState } from "react";

function TodoAppAi() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  function handleDelete(todo) {
    setTodos(todos.filter((item) => item !== todo));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo}>
            {todo}
            <button onClick={() => handleDelete(todo)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoAppAi;
