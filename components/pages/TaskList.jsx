import React from 'react';

const TaskList = ({ tasks, onRemove }) => {
  return (
    <ul className="task-list">
      {tasks.map(task => (
        <li key={task.id}>
          <span>{task.time} - {task.text}</span>
          <button onClick={() => onRemove(task.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
