import React, { useState } from 'react';
import '../../css/pages/GoalsManager.css';

export default function GoalsManager({ goals, setGoals }) {
  const [newGoal, setNewGoal] = useState('');

  const handleAddGoal = (e) => {
    e.preventDefault();
    if (!newGoal.trim()) return;

    const goal = {
      id: Date.now(),
      text: newGoal.trim(),
      completed: false,
    };

    setGoals([goal, ...goals]);
    setNewGoal('');
  };

  const toggleGoal = (id) => {
    const updated = goals.map(g =>
      g.id === id ? { ...g, completed: !g.completed } : g
    );
    setGoals(updated);
  };

  return (
    <div className="goals-container">
      <h2>My Goals</h2>
      <form onSubmit={handleAddGoal} className="goal-form">
        <input
          type="text"
          value={newGoal}
          onChange={(e) => setNewGoal(e.target.value)}
          placeholder="Enter a goal..."
        />
        <button type="submit">Add</button>
      </form>

      <ul className="goals-list">
        {goals.length === 0 ? (
          <p>No goals yet.</p>
        ) : (
          goals.map(goal => (
            <li key={goal.id} className={goal.completed ? 'completed' : ''}>
              <input
                type="checkbox"
                checked={goal.completed}
                onChange={() => toggleGoal(goal.id)}
              />
              <span>{goal.text}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
