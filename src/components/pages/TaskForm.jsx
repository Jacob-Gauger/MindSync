import React, { useState } from 'react';

const daysOfWeek = [
  'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

const TaskForm = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [time, setTime] = useState('');
  const [day, setDay] = useState(daysOfWeek[new Date().getDay()]); // default to current day

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text && time && day) {
      onAdd({ text, time, day });
      setText('');
      setTime('');
      setDay(daysOfWeek[new Date().getDay()]); // reset to current day after submit
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <select value={day} onChange={(e) => setDay(e.target.value)} required>
        {daysOfWeek.map(d => (
          <option key={d} value={d}>{d}</option>
        ))}
      </select>
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="What do you plan?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TaskForm;
