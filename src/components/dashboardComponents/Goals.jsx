import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/dashboardComponentsCSS/Goals.css'

export default function GoalList({ goals, setGoals }) {
    const toggleGoal = (id) => {
    const updated = goals.map(g =>
      g.id === id ? { ...g, completed: !g.completed } : g
    );
    setGoals(updated);
  };
 return (
    <div id='goals'>
        <Link to="/goals"><h2>Goals</h2></Link>
        <ul className="goals-list">
            {goals.length === 0 ? (<p className="no-goals">No goals yet.</p>) : (
                <ul className="goals-list">
                    {goals.map(goal => (
                        <li key={goal.id} className={goal.completed ? 'completed' : ''}>
                        <input
                            type="checkbox"
                            checked={goal.completed}
                            onChange={() => toggleGoal(goal.id)}
                        />
                        <span>{goal.text}</span>
                        </li>
                    ))}
                </ul>
            )}
        </ul>
    </div>
  );
}
