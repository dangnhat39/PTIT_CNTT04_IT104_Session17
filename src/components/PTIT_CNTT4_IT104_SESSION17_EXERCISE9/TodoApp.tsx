import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./Todolist";
import ConfirmModal from "./ConfirmModal";

export type Todo = {
  id: number;
  title: string;
  status: boolean;
};

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState<Todo | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("todos");
    if (data) {
      setTodos(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = (title: string) => {
    if (title.trim() === "") {
      setError("Tên công việc không được để trống");
      return;
    }
    if (todos.some((t) => t.title === title)) {
      setError("Tên công việc không được phép trùng");
      return;
    }
    const newTodo: Todo = { id: Date.now(), title, status: false };
    setTodos([...todos, newTodo]);
    setError("");
  };

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((t) => (t.id === id ? { ...t, status: !t.status } : t))
    );
  };

  const handleDeleteRequest = (todo: Todo) => {
    setTodoToDelete(todo);
    setShowModal(true);
  };

  const handleConfirmDelete = () => {
    if (todoToDelete) {
      setTodos(todos.filter((t) => t.id !== todoToDelete.id));
    }
    setShowModal(false);
    setTodoToDelete(null);
  };

  const handleCancelDelete = () => {
    setShowModal(false);
    setTodoToDelete(null);
  };

  return (
    <div>
      <h2>Quản lý công việc</h2>
      <TodoForm onAdd={handleAdd} />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <TodoList todos={todos} onToggle={handleToggle} onDelete={handleDeleteRequest} />
      {showModal && (
        <ConfirmModal onConfirm={handleConfirmDelete} onCancel={handleCancelDelete} />
      )}
    </div>
  );
}
