function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className="task-item">
      <button
        type="button"
        className={task.done ? 'task-text done' : 'task-text'}
        aria-pressed={task.done}
        onClick={() => onToggle(task.id)}
      >
        {task.text}
      </button>
      <button
        type="button"
        className="delete-button"
        aria-label={`Delete ${task.text}`}
        onClick={() => onDelete(task.id)}
      >
        Delete
      </button>
    </li>
  )
}

export default TaskItem
