import React, { useState, useEffect } from 'react';

export default function HabitManager({ habits, setHabits }) {
  const [newHabit, setNewHabit] = useState('');

  const addHabit = () => {
    if (newHabit.trim() === '') return;
    setHabits([...habits, { name: newHabit, completed: false }]);
    setNewHabit('');
  };

  const toggleHabit = (index) => {
    const updatedHabits = [...habits];
    updatedHabits[index].completed = !updatedHabits[index].completed;
    setHabits(updatedHabits);
  };

  const deleteHabit = (index) => {
    setHabits(habits.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Habit Tracker</h2>
      <input
        type="text"
        value={newHabit}
        onChange={(e) => setNewHabit(e.target.value)}
        placeholder="New habit"
      />
      <button onClick={addHabit}>Add</button>
      <ul>
        {habits.map((habit, i) => (
          <li key={i}>
            <span onClick={() => toggleHabit(i)} style={{ textDecoration: habit.completed ? 'line-through' : 'none' }}>
              {habit.name}
            </span>
            <button onClick={() => deleteHabit(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
