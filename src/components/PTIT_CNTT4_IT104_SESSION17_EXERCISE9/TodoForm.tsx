import React, { useState } from "react";

type Props = {
  onAdd: (title: string) => void;
};

export default function TodoForm({ onAdd }: Props) {
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Nhập công việc..."
      />
      <button type="submit">Thêm</button>
    </form>
  );
}
