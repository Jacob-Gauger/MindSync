import React from 'react';
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
        <h2 className="habit-title">Daily Habit Checklist</h2>
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
