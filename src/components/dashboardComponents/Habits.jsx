import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/dashboardComponentsCSS/Habits.css'

export default function HabitChecklist({ habits, setHabits }) {
    const toggleHabit = (index) => {
        const updated = [...habits];
        updated[index].completed = !updated[index].completed;
        setHabits(updated);
    };

    const completedCount = habits?.filter(h => h.completed).length || 0;

    return (
        <div className="habit-checklist-container">
        <Link to="/habits"><h2 className="habit-title">Daily Habit Checklist</h2></Link>
        <p className="habit-progress">{completedCount} of {habits?.length || 0} habits completed</p>

        <ul className="habit-list">
            {Array.isArray(habits) &&
            habits.map((habit, index) => (
                <li key={index} className="habit-item">
                <input
                    type="checkbox"
                    checked={habit.completed}
                    onChange={() => toggleHabit(index)}
                />
                <label className={habit.completed ? 'habit-completed' : ''}>
                    {habit.name}
                </label>
                </li>
            ))}
        </ul>
        </div>
    );
}
