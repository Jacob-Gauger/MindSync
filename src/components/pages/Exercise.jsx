import React, { useState } from 'react';

const Exercise = () => {
  const [exercises, setExercises] = useState([]);
  const [name, setName] = useState('');
  const [duration, setDuration] = useState('');

  const handleAdd = (e) => {
    e.preventDefault();
    if (!name.trim() || !duration.trim() || isNaN(duration) || duration <= 0) return;

    const newExercise = {
      id: Date.now(),
      name: name.trim(),
      duration: Number(duration),
      timestamp: Date.now(),
    };

    setExercises([newExercise, ...exercises]);
    setName('');
    setDuration('');
  };

  const handleDelete = (id) => {
    setExercises(exercises.filter(ex => ex.id !== id));
  };

  return (
    <div className="exercise-tracker">
      <h2>Exercise Tracker</h2>

      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Exercise name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          min="1"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          required
        />
        <button type="submit">Add Exercise</button>
      </form>

      {exercises.length === 0 ? (
        <p>No exercises logged yet.</p>
      ) : (
        <ul className="exercise-list">
          {exercises.map(({ id, name, duration, timestamp }) => (
            <li key={id}>
              <strong>{name}</strong> — {duration} min{' '}
              <small>({new Date(timestamp).toLocaleDateString()})</small>
              <button onClick={() => handleDelete(id)} style={{ marginLeft: '10px' }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Exercise;
