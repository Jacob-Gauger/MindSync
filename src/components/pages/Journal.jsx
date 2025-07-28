import React, { useState } from 'react';
import '../../css/pages/Journal.css'
import { updateStreak } from '../dashboardComponents/UpdateStreaks';

const Journal = ({ journalEntries, setJournalEntries }) => {
  const [entry, setEntry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (entry.trim() === '') return;

    const newEntry = {
      id: Date.now(),
      text: entry.trim(),
      date: new Date().toLocaleString(),
    };

    setJournalEntries([newEntry, ...journalEntries]);
    setEntry('');
    updateStreak("streak_journal");
  };

  return (
    <div className="journal-container">
      <h2>Journal</h2>
      <form onSubmit={handleSubmit} className="journal-form">
        <textarea
          value={entry}
          onChange={(e) => setEntry(e.target.value)}
          placeholder="Write your thoughts..."
          rows={5}
        />
        <button type="submit">Add Entry</button>
      </form>

      <div className="journal-entries">
        {journalEntries.length === 0 ? (
          <p>No entries yet.</p>
        ) : (
          journalEntries.map((e) => (
            <div key={e.id} className="journal-entry">
              <small>{e.date}</small>
              <p>{e.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Journal;
