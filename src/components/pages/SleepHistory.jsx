import React from 'react';

const formatDate = (ts) => {
  const date = new Date(ts);
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const yy = String(date.getFullYear()).slice(-2);
  return `${mm}/${dd}/${yy}`;
};

const SleepHistory = ({ sleepData, onDelete }) => {
  if (!sleepData || sleepData.length === 0) {
    return <p>No sleep data available.</p>;
  }

  return (
    <div className="sleep-history">
      <ul>
        {sleepData.map((entry, index) => (
          <li key={entry.timestamp} className="sleep-entry">
            <span className="sleep-emoji" aria-label="sleep rating">{entry.rating}</span>
            <span className="sleep-hours" aria-label="hours slept">{entry.hours}-hrs, </span>
            <span className="sleep-note" aria-label="note">{entry.note || <i>No note</i>}</span>
            <span className="sleep-date" aria-label="entry date" style={ {marginLeft: '10px'} } >{formatDate(entry.timestamp)}</span>
            <button className="delete-btn" onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SleepHistory;
