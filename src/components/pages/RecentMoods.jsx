import React from 'react';

const RecentMoods = ({ moodHistory = [] }) => {
  return (
    <div>
      <ul>
        {moodHistory.length > 0 ? (
          moodHistory.map((entry, i) => (
            <li key={i}>
              {entry.mood?.emoji} - {entry.note} ({entry.timestamp})
            </li>
          ))
        ) : (
          <p>No moods logged yet.</p>
        )}
      </ul>
    </div>
  );
};

export default RecentMoods;
