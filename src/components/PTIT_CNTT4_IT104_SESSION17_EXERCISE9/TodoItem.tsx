import React from "react";
import type { Todo } from "./TodoApp";


type Props = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (todo: Todo) => void;
};

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li>
      <span
        style={{ textDecoration: todo.status ? "line-through" : "none", cursor: "pointer" }}
        onClick={() => onToggle(todo.id)}
      >
        {todo.title}
      </span>
      <button onClick={() => onDelete(todo)}>Xóa</button>
    </li>
  );
}
