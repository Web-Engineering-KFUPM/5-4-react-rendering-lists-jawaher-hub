// src/components/TaskItem.jsx
import DueBadge from "./DueBadge";

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
        <li className="task">
      <label className="taskMain">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={() => {
            console.log("TOGGLE FIRED", task.id);
            onToggle(task.id);
          }}
        />

        {!task.isDone && <DueBadge dueDate={task.dueDate} />}

        <span className="title">{task.title}</span>
      </label>

      <button
        className="ghost"
        onClick={() => {
          console.log("DELETE FIRED", task.id);
          onDelete(task.id);
        }}
      >
        ✕
      </button>
    </li>
  );
}