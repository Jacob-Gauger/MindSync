import React, { useState, useEffect } from 'react';
import '../../css/pages/Sleep.css';
import SleepHistory from './SleepHistory';

const emojiOptions = ['😴', '😊', '😐', '😫', '😵'];

const Sleep = ({sleepData, setSleepData}) => {
  const [rating, setRating] = useState('');
  const [note, setNote] = useState('');
  const [hours, setHours] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('sleepData');
    if (stored) {
      setSleepData(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('sleepData', JSON.stringify(sleepData));
  }, [sleepData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating || !hours.trim()) return;

    const newEntry = {
      rating,
      hours: parseFloat(hours),
      note,
      timestamp: Date.now(),
    };

    setSleepData([newEntry, ...sleepData]);
    setRating('');
    setNote('');
    setHours('');
  };

  const handleDelete = (indexToDelete) => {
    setSleepData(sleepData.filter((_, i) => i !== indexToDelete));
  };

  return (
    <div className="sleep-page">
      <h2>How was your sleep?</h2>
      <form className="sleep-form" onSubmit={handleSubmit}>
        <div className="emoji-options">
          {emojiOptions.map((emoji) => (
            <button
              key={emoji}
              type="button"
              className={`emoji-btn ${rating === emoji ? 'selected' : ''}`}
              onClick={() => setRating(emoji)}
            >
              {emoji}
            </button>
          ))}
        </div>

        <input
          type="number"
          min="0"
          step="0.1"
          placeholder="Hours slept"
          value={hours}
          onChange={(e) => setHours(e.target.value)}
          className="sleep-hours-input"
          required
        />

        <textarea
          placeholder="Leave a note..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={3}
        />
        <br />
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      <SleepHistory sleepData={sleepData} onDelete={handleDelete} />
    </div>
  );
};

export default Sleep;