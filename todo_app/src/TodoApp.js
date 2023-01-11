import { useState } from "react";
import "./App.css";

const mockTodos = [
  { id: 1, title: "Learn how to delete" },
  { id: 2, title: "Learn how to use inputs" },
];

const TodoApp = () => {
  const [todos, setTodos] = useState(mockTodos);
  const [todoText, setTodoText] = useState("");

  const handleDeleteTodo = (id) => {
    // 1 budas
    // const newTodos = todos.filter((todo) => todo.id !== id); // istrina reiksme is array
    // setTodos(newTodos);

    // 2 budas
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleChange = (event) => {
    // event.target.value yra tekstas/skaiciai ar smth
    const value = event.target.value;
    setTodoText(value);
  };

  const handleAddTodo = () => {
    const title = todoText.trim();
    const alreadyExists = todos.some((todo) => todo.title === title);

    if (title && !alreadyExists) {
      const newTodo = { id: Date.now(), title };
      todos.push(newTodo);
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setTodoText("");
    }
  };

  return (
    <div className="app">
      <h2 className="todo-title">Todo List</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title}{" "}
            <strong
              className="delete-button"
              onClick={() => handleDeleteTodo(todo.id)}
            >
              X
            </strong>
          </li>
        ))}
      </ul>
      <input type="text" value={todoText} onChange={handleChange} />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default TodoApp;
