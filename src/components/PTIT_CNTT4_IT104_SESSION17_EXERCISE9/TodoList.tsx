import React from "react";
import type { Todo } from "./TodoApp";
import TodoItem from "./TodoItem";

type Props = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onDelete: (todo: Todo) => void;
};

export default function TodoList({ todos, onToggle, onDelete }: Props) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
