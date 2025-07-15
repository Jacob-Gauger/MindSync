import React, { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

const Planning = ({tasks, setTasks}) => {

  const addTask = (task) => {
    setTasks(prev => [...prev, { ...task, id: Date.now() }]);
  };

  const removeTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  return (
    <div className="planning">
      <h2>My Daily Planner</h2>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onRemove={removeTask} />
    </div>
  );
};

export default Planning;
